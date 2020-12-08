import React from 'react'
import { connect } from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import {logoutUser} from '../state-actions/user-action'


const Footer = props => {


    return (
        <div className='footer-cta'>
            <div className='footer-nav'>
                <nav className='footer-nav-tag'>
                <NavLink className='nav-link footer-home' to='/homepage'>Home</NavLink>
                </nav>
            </div>
            <Link to='/'>
                <button
                className='footer-btn-logout'
                onClick={props.logoutUser}>
                    Log Out
                </button>
            </Link>
            <h5>Footer</h5>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {logoutUser})(Footer)