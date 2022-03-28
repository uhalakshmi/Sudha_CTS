import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Elephent</Link></li>
                    <li><Link to="/tiger">Tiger</Link></li>
                    <li><Link to="/horse">Horse</Link></li>
                </ul>
            </nav>
        </header>
    )
}