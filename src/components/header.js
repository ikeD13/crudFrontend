import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => (
    <nav className="navbar navbar-light bg-light justify-content-between">
    <Link className="navbar-brand" to="/">Ike's Movie Reviews</Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/movies">Movie Reviews</Link>
      </li>
    </ul>
    <form className="form-inline">
      <Link to="/post" className="btn btn-outline-warning my-2 my-sm-0" type="submit">Create A Movie Review</Link>
    </form>
  </nav>
)

export default Header