import React from "react"
import {Link} from "react-router-dom"

const Post = (props) => {

  const handlePost = (event) => {
    let postObj = {
      title:document.getElementById("title").value,
      director:document.getElementById("director").value,
      year:document.getElementById("year").value,
      rating:Number(document.getElementById("rating").value),
      url:document.getElementById("posterUrl").value
    }
    props.post(postObj)
  }

  return (
    <div>
      <input className = "form-control" id = "title" type="text" placeholder = "input movie title"></input>
      <input className = "form-control" id = "director" type="text" placeholder = "input director"></input>
      <input className = "form-control" id = "year" type="text" placeholder = "input year"></input>
      <input className = "form-control" id = "rating" type="text" placeholder = "input movie rating"></input>
      <input className = "form-control" id = "posterUrl" type="text" placeholder = "input movie poster url"></input>
      <Link to="/movies" className = "btn btn-success" onClick={(e)=>{handlePost(e)}}>Submit Movie Review</Link>
    </div>
  )
}

export default Post