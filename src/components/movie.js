import React from "react"

const Movie = (props) => (
  <tr>
    <th scope="row">{props.movie.id}</th>
    <td>{props.movie.title}</td>
    <td>{props.movie.director}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.my_rating}</td>
    <td>
      <button class="btn btn-outline-success my-2 my-sm-0">
        Edit
      </button>
    </td>
    <td>
      <button class="btn btn-outline-danger my-2 my-sm-0">
        Delete
      </button>
    </td>
  </tr>
)

export default Movie