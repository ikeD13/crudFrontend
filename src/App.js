import React, {Component} from 'react';
import Header from "./components/header.js"
import HomePage from "./components/homePage.js"
import Movies from "./components/movies.js"
import MoviePage from "./components/moviePage.js"
import Post from "./components/post.js"
import Edit from "./components/edit.js"
import {NyanScrollBar} from "react-nyan-stroller"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {

  state = {movies:[],selected:{}}

  async componentDidMount(){
    let movies = await fetch(`${process.env.REACT_APP_API}`).then(data=>data.json())
    let sorted = await movies.sort((a,b)=>a.id-b.id)
    this.setState({...this.state,movies:sorted})
  }

  async getSpecific(id){
    if(!id) return
    if(this.state.movies.filter(e=>e.id===Number(id)).length === 0)return
    let movie = await fetch(`${process.env.REACT_APP_API}/${id}`).then(data=>data.json())
    this.setState({...this.state,selected:movie})
  }

  async postMovie({title,director,year,rating,url}){
    if(!title||!director||!year||!rating||!url)return
    let m = {title,director,year,rating,url}
    let payload = JSON.stringify(m)
    let movie = await fetch(`${process.env.REACT_APP_API}`,{method:"post",headers: {"Content-Type": "application/json","Accept": "application/json"},body: payload}).then(data=>data.json())
    this.setState({...this.state,movies:[...this.state.movies,movie]})
  }

  async updateMovie({id,title,director,year,my_rating,poster_url}){
    if(!id||!title||!director||!year||!my_rating||!poster_url)return
    let payload = JSON.stringify({title,director,year,rating:my_rating,url:poster_url})
    let movie = await fetch(`${process.env.REACT_APP_API}/${id}`,{method:"PUT",headers: {"Content-Type": "application/json","Accept": "application/json"},body: payload}).then(data=>data.json())
    let found = this.state.movies.find(e=>e.id===Number(id))
    let index = this.state.movies.indexOf(found)
    let newState = {...this.state,movies:[...this.state.movies.slice(0,index), movie, ...this.state.movies.slice(index+1)]}
    this.setState(newState)
  }

  async deleteMovie(id){
    if(!id)return
    await fetch(`${process.env.REACT_APP_API}/${id}`,{method:"delete",headers: {"Content-Type": "application/json","Accept": "application/json"}})
    let found = this.state.movies.find(e=>e.id===id)
    let index = this.state.movies.indexOf(found)
    let newState = {...this.state,movies:[...this.state.movies.slice(0,index),...this.state.movies.slice(index+1)].sort((a,b)=>a.id-b.id)}
    this.setState(newState)
  }

  changeSelected(selected){
    this.setState({...this.state,selected})
  }

  changeHandler(id,val){
    this.setState({...this.state,selected:{...this.state.selected,[id]:val}})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path = "/" render={()=><HomePage/>}/>
              <Route exact path = "/movies" render={()=><Movies movies={this.state.movies} editBtn = {this.changeSelected.bind(this)} del = {this.deleteMovie.bind(this)}/>}/>
              <Route path = "/post" render = {()=><Post post = {this.postMovie.bind(this)}/>}/>
              <Route path = {`/edit/${this.state.selected.id}`} render={()=><Edit edit={this.updateMovie.bind(this)} changeHandler = {this.changeHandler.bind(this)} selected = {this.state.selected}/>}/>
              <Route path = {`/movies/${this.state.selected.id}`} render={()=><MoviePage movie = {this.state.selected}/>}/>
            </Switch>
          </div>
        </Router>
        <NyanScrollBar draggable targetAxis="vertical" />
        <NyanScrollBar draggable targetAxis="horizontal" />
        <NyanScrollBar draggable oppositePosition targetAxis="vertical" />
        <NyanScrollBar draggable oppositePosition targetAxis="horizontal" />
      </div>
    );
  }
}

export default App;
