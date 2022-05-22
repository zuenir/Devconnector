import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
                <h1 className="x-large">Developer Connecter</h1>
                <p>Create develepor profile/portfolio, 
                    share posts and get help from other developers</p>
                <div className="buttons">
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing