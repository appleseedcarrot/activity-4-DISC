import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
      <div id="footer">
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <a> About </a> </li>
          <li> <Link to="/Explore"> Explore </Link> </li>
          <li> <Link to="/Signin" > Sign In </Link> </li>
        </ul>
        <p> Roomboard @ 2024 All rights reserved. </p>
      </div>
    )
  }