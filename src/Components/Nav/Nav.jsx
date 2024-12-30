import './Nav.css'

export default function Nav() {

    return (
      <>
        <nav id="navbar">
          <h2 id="logo"> RoomBoard </h2>
          <ul id="nav-links">
            <li> <a class="nav-link"> About </a> </li>
            <li> <a class="nav-link"> Explore </a> </li>
            <li> <a class="nav-link"> Get Started </a> </li>
          </ul>
        </nav>
        <hr></hr>
      </>
    );
  }