import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Nav.css'
import './Footer.css'
import './OptionBar.css'
import './Post.css'

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
        <li> <a> Home </a> </li>
        <li> <a> About </a> </li>
        <li> <a> Explore </a> </li>
        <li> <a> Sign In </a> </li>
      </ul>
      <p> Roomboard @ 2024 All rights reserved. </p>
    </div>
  )
}

function OptionBar({toggleFilter, filters}) {

  // Checks if the filter is currently active
  const isActive = (filter) => filters.includes(filter);

  return (
    <div id="option-bar">
      <div id="filter">
        <p> Filters: </p>
        <ul> 
          <li> <button onClick={() => toggleFilter('Gaming')} className={isActive('Gaming') ? 'active-filter' : 'inactive-filter'}> Gaming </button> </li>
          <li> <button onClick={() => toggleFilter('Natural')} className={isActive('Natural') ? 'active-filter' : 'inactive-filter'}> Natural </button> </li>
          <li> <button onClick={() => toggleFilter('Modern')} className={isActive('Modern') ? 'active-filter' : 'inactive-filter'}> Modern </button> </li>
          <li> <button onClick={() => toggleFilter('Futuristic')} className={isActive('Futuristic') ? 'active-filter' : 'inactive-filter'}> Futuristic </button> </li>
        </ul>
      </div>
      <div id="options-right">
        <p> Sort by: </p>
        <select id="sort"> 
          <option> Recent </option>
          <option> Top </option>
          <option> Highest Rated </option>
          <option> Trending </option>
        </select>
        <button id="create-post-button"> + Create Post </button>
      </div>
    </div>
  );
}

function Post({filter}) {

  return (
    <div class="post">
      <div class="post-image"> </div>
      <div class="post-filters"> <p> {filter} </p> </div>
    </div>
  );
}

function App() {

  // Filters
  const [filters, setFilters] = useState([]);
  // Example Posts
  const [allPosts, setallPosts] = useState([
    { id: 1, category: 'Gaming'},
    { id: 2, category: 'Natural'},
    { id: 3, category: 'Modern'},
    { id: 4, category: 'Futuristic'},
    { id: 5, category: 'Natural'},
    { id: 6, category: 'Natural'},
    { id: 7, category: 'Gaming'},
    { id: 8, category: 'Futuristic'},
    { id: 9, category: 'Gaming'},
    { id: 10, category: 'Natural'},
  ]);
  // The filtered posts
  const [filteredPosts, setFilteredPosts] = useState([allPosts]);

  // Toggle filters
  const toggleFilter = (filter) => {
    // Check if filter is selected
    if (filters.includes(filter)) {
      // Disable the filter by removing it from filters array
      let newFilters = filters.filter((f) => f != filter);
      setFilters(newFilters);
    }
    else {
      setFilters([...filters, filter]);
    }
  }

  // Change which listings are shown based on filter
  useEffect(() => {
      // Check if any filter is being applied
      if (filters.length === 0) {
        setFilteredPosts(allPosts);
      }
      else {
        // filter by what is selected
        const updatedPosts = allPosts.filter((post) => 
          filters.some((filter) => 
            post.category === filter));
        setFilteredPosts(updatedPosts);
      }
    }, [filters]
  );

  // For testing purposes, let's see when filters are added or removed
  useEffect(() => {
    console.log(filters);
  }, [filters]
  );

  return (
    <>
      <Nav> </Nav>
      <h1> Explore </h1>
      <OptionBar toggleFilter={toggleFilter} filters={filters}> </OptionBar>
      <div id='postGrid'>
        {filteredPosts.map((listing) => {
          return (
            <Post filter={listing.category}> </Post>
          )
        })
      }
      </div>
      <Footer> </Footer>
    </>
  );
}

export default App
