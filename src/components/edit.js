import React from "react"
import {Link} from "react-router-dom"

const Edit = (props) => {
  const handleEdit = (event) => {
    props.edit(props.selected)
  }
  const handleChange = (event) => {
    event.preventDefault()
    props.changeHandler(event.target.id,event.target.value)
  }
  return (
    <div>
      <img src = {`${props.selected.poster_url}`}/>
      <input className = "form-control" id = "title" type="text" placeholder = "edit movie title" value = {props.selected.title} onChange = {(e)=>{handleChange(e)}}></input>
      <input className = "form-control" id = "director" type="text" placeholder = "edit director" value = {props.selected.director} onChange = {(e)=>{handleChange(e)}}></input>
      <input className = "form-control" id = "year" type="text" placeholder = "edit year" value = {props.selected.year} onChange = {(e)=>{handleChange(e)}}></input>
      <input className = "form-control" id = "rating" type="text" placeholder = "edit movie rating" value = {props.selected.my_rating} onChange = {(e)=>{handleChange(e)}}></input>
      <input className = "form-control" id = "poster_url" type="text" placeholder = "edit movie poster url" value={props.selected.poster_url} onChange = {(e)=>{handleChange(e)}}></input>
      <Link to = "/movies" className = "btn btn-success" onClick={(e)=>{handleEdit(e)}}>Submit Movie Review</Link>
    </div>
  )
}

export default Edit
