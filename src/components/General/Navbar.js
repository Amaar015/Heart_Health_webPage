import React, { useState } from 'react'
import logo from '../../images/logo.webp'
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <>
            <nav className='header-nav'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <ul className={click ? 'mobile-nav' : 'navbar'} onClick={() => setClick(false)}>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About Us</Link> </li>
                    <li> <Link to='/blog'>Blog</Link> </li>
                    <li> <Link to='/team'>Team</Link> </li>
                    <li> <Link to='/services'>Services</Link> </li>
                    <li> <Link to='/experts'>Experts</Link> </li>
                    <li> <Link to='/contact'>Contact</Link> </li>

                </ul>
                <button className="toggle" onClick={() => setClick(!click)}>
                    {click ? <h2>A</h2> : <h2>B</h2>}
                </button>
            </nav>
        </>
    )
}

export default Navbar