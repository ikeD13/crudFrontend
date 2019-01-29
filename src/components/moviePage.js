import React from "react"

const MoviePage = (props) => (
  <div>
    <h1>{props.movie.title}</h1>
    <img src={`${props.movie.poster_url}`}/>
    <h3>director:</h3>
    <h4>{props.movie.director}</h4>
    <h3>year:</h3>
    <h4>{props.movie.year}</h4>
    <h3>My Rating</h3>
    <h4>{props.movie.my_rating}</h4>
  </div>
)

export default MoviePage
