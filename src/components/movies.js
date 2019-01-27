import React, {Fragment} from "react"
import Movie from "./movie"

const Movies = (props) => (
  <Fragment>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Director</th>
          <th scope="col">Year</th>
          <th scope="col">My Rating</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map(movie=><Movie movie={movie}/>)}
      </tbody>
    </table>
  </Fragment>
)

export default Movies