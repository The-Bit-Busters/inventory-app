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
        <nav className='nav-bar navbar-static-top'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1>Bit Buckets</h1>
                </Link>
            <form>
                <IoIosSearch className='searchIcon' size='20px' />
                <input className='searchBar' type="text" placeholder="Search" />
            </form>
            <ul className='navbar-right'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <li>About</li>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <li>Contact Us</li>
                </Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <li>Your Cart</li>
                </Link>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavBar