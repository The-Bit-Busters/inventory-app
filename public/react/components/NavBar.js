import React from 'react'
import '../stylesheets/navbar.css'
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';

const NavBar = () => {
  return (
    <div  style={{
        backgroundColor: 'white',
        borderBottom: '.5px solid rgb(172, 172, 172)',
      }}>
        <nav className='nav-bar'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>Bit Buckets</h1>
                </Link>
            <form>
                <IoIosSearch />
                <input className='searchBar' type="text" placeholder="Search" />
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