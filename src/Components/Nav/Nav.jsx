import './Nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
      <>
        <nav id="navbar">
          <Link to="/"> <h2 id="logo"> RoomBoard </h2> </Link> 
          <ul id="nav-links">
            <li> <a class="nav-link"> About </a> </li>
            <li> <Link to="/Explore" class="nav-link"> Explore </Link> </li>
            <li> <Link to="/signin" class="nav-link"> Get Started </Link> </li>
          </ul>
        </nav>
        <hr></hr>
      </>
    );
  }