import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../user/user-action'
import '../assets/css/header.css'


const Header = props => {


    return (
        <div className='header-cta'>
          
            <h2 className='header-title'>Beta Blog What's On Your Nog</h2>
             <div className='nav-logout-wrap'>
                  <Link to='/'>
                <button
                className='header-btn-logout'
                onClick={props.logoutUser}>
                    Log Out
                </button>
            </Link>
                <nav className='nav-link-wrap'>
                    <Link className='header-link-nav' to='/homepage'>Home</Link>
                    <Link className='header-link-nav'  to='/post'>Post</Link>
                    <Link className='header-link-nav'  to='/auth/:id/details'>Details</Link>
                    <Link className='header-link-nav'  to='/comment'>Comment</Link>
                    <Link className='header-link-nav'  to='/notifications'>Notification</Link>
                    </nav>
            
          
            </div>
            </div>
        
    
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {logoutUser})(Header)