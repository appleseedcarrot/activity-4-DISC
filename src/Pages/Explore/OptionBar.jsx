import './OptionBar.css'
import { Link } from 'react-router-dom'

export default function OptionBar({toggleFilter, filters}) {

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
        <Link to="/create-post"> <button id="create-post-button"> + Create Post </button> </Link>
      </div>
    </div>
  );
}