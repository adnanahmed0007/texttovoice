import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/texttospeech">Text to Speech</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    )
}

export default Header
