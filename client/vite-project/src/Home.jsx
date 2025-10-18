import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Text-to-Speech</h1>
            <p className="home-subtitle">
                Convert your text into natural speech instantly.
            </p>
            <p className="home-note">
                You can try <span>5 free messages</span> — after that, please <strong>Login</strong> or <strong>Sign up</strong> to continue and hear unlimited voices.
            </p>
        </div>
    )
}

export default Home
