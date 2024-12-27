import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Nav.css'
import './Footer.css'

function Nav() {

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

function Footer() {
  return (
    <div id="footer">
      <ul>
        <li> Home </li>
        <li> About </li>
        <li> Explore </li>
        <li> Sign In </li>
      </ul>
      <p> Roomboard @ 2024 All rights reserved. </p>
    </div>
  )
}

// function OptionBar() {

//   return (
//     <>

//     </>
//   );
// }

function App() {

  return (
    <>
      <Nav> </Nav>
      <h1> Explore </h1>
      <Footer> </Footer>
    </>
  );
}

export default App
