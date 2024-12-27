import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Nav.css'

function Nav() {

  return (
    <>
      <nav id="navbar">
        <h1> RoomBoard </h1>
        <ul class="nav-links">
          <li> <a class="nav-link"> About </a> </li>
          <li> <a class="nav-link"> Explore </a> </li>
          <li> <a class="nav-link"> Get Started </a> </li>
        </ul>
      </nav>
      <hr></hr>
    </>
  );
}

function App() {

  return (
    <>
      <Nav> </Nav>
    </>
  );
}

export default App
