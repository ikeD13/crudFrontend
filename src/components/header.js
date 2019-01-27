import React from "react"


const Header = (props) => (
  <nav class="navbar navbar-secondary bg-secondary justify-content-between">
    <a class="navbar-brand">Ikes Movie Reviews</a>
    <form class="form-inline">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Create A Movie Review</button>
    </form>
  </nav>
)

export default Header