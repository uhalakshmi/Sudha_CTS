import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" style={({isActive}) => ({backgroundColor: isActive?"blue":"darkgreen" })}>Elephent</NavLink></li>
                    <li><NavLink to="/tiger/105" style={({isActive}) => ({backgroundColor: isActive?"blue":"darkgreen" })}>Tiger</NavLink></li>
                    <li><NavLink to="/horse/51/Appaloosa" style={({isActive}) => ({backgroundColor: isActive?"blue":"darkgreen" })}>Horse</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}


