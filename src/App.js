import React, { Component } from 'react';
import Movies from "./components/movies.js"
import Header from './components/header.js';

class App extends Component {

  state = {movies:[],selected:{}}

  async componentDidMount(){
    let movies = await fetch(`${process.env.REACT_APP_API}`).then(data=>data.json())
    let sorted = await movies.sort((a,b)=>a.id-b.id)
    this.setState({...this.state,movies:sorted},()=>{console.log(this.state)})
  }

  async getSpecific(id){
    if(!id) return
    if(this.state.movies.filter(e=>e.id===Number(id)).length === 0)return
    let movie = await fetch(`${process.env.REACT_APP_API}/${id}`).then(data=>data.json())
    let found = this.state.movies.find(e => e.id === Number(id))
    let index = this.state.movies.indexOf(found)
    this.setState({...this.state,selected:movie})
  }

  async postMovie({title,director,year,rating}){
    if(!title||!director||!year||!rating)return
    let payload = JSON.stringify({title,director,year,rating})
    let movie = await fetch(`${process.env.REACT_APP_API}`,{method:"post",headers: {"Content-Type": "application/json","Accept": "application/json"},body: payload}).then(data=>data.json())
    this.setState({...this.state,movies:[...this.state.movies,movie]})
  }

  async updateMovie(id,{title,director,year,rating}){
    if(!id||!title||!director||!year||!rating)return
    let payload = JSON.stringify({title,director,year,rating})
    let movie = await fetch(`${process.env.REACT_APP_API}`,{method:"PUT",headers: {"Content-Type": "application/json","Accept": "application/json"},body: payload}).then(data=>data.json())
    let found = this.state.movies.find(e=>e.id===Number(id))
    let index = this.state.movies.indexOf()
    let newState = {...this.state,movies:[...this.state.movies.slice(0,index), movie, ...this.state.movies.slice(index+1)]}
    this.setState(newState)
  }

  async deleteMovie(id){
    if(!id)return
    await fetch(`${process.env.REACT_APP_API}/${id}`,{method:"delete",headers: {"Content-Type": "application/json","Accept": "application/json"},}).then(data=>data.json())
    let found = this.state.movies.find(e=>e.id===id)
    let index = this.state.movies.indexOf(found)
    let newState = {...this.state,movies:[...this.state.movies.slice(0,index),...this.state.movies.slice(index+1)].sort((a,b)=>a.id-b.id)}
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
