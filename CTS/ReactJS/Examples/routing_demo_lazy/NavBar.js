import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default function NavBar(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">AbountUs</Link></li>
                    <li><Link to="/operations">Operations</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contactus">ContactUs</Link></li>
                </ul>
            </nav>
        </header>
    )
}