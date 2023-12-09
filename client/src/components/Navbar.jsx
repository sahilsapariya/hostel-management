import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Components.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar