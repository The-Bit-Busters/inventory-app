import React from 'react'
import '../stylesheets/navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className='nav-bar'>
            <h1>Bit Buckets</h1>
            <form>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </form>
            <ul className='navbar-right'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <li>About</li>
                <li>Help</li>
                <li>Your Cart</li>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavBar