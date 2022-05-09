import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';

const Landing = ({isAuthenticated}) => {

    if(isAuthenticated){
        return (<Redirect to="/dashboard"/>);
    }

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

Landing.propTypes = {
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
