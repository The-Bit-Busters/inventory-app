import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <nav>
        <h1>Bit Buckets</h1>
        <form>
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </form>
        <ul className='navbar-right'>
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
            <li>Your Cart</li>
        </ul>
        
    </nav>
  )
}

export default NavBar