import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {


    return (
        <div className='header-cta'>
            <h1>Header</h1>
            <div className='header-nav-wrap'>
                <nav className='header-nav-tag'>
                    <Link to='/post'>
                        Post
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header