import React, { Component } from 'react';
import Movies from "./components/movies.js"
class App extends Component {
 
 async componentDidMount(){
   state = {movies:[]}
   let movies= await fetch (`${process.env.REACT_APP_API}`).then(data=>data.json())
   this.setState({...this.state,movies})
 }
 
  render() {
    return (
      <div className="App">
      <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
