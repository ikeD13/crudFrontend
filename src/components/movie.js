import React from "react"
import {Link} from "react-router-dom"

const Movie = (props) => (
  <tr>
    <th scope="row">{props.movie.id}</th>
    <td><Link to={`/movies/${props.movie.id}`} onClick={()=>{props.editBtn(props.movie)}}>{props.movie.title}</Link></td>
    <td>{props.movie.director}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.my_rating}</td>
    <td>
      <Link to = {`/edit/${props.movie.id}`} onClick={()=>{props.editBtn(props.movie)}} className="btn btn-outline-success my-2 my-sm-0">
        Edit
      </Link>
    </td>
    <td>
      <button onClick={(e)=>{props.delBtn(props.movie.id)}} className="btn btn-outline-danger my-2 my-sm-0">
        Delete
      </button>
    </td>
  </tr>
)

export default Movie
