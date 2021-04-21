import React from 'react'
import {connect} from 'react-redux'

const LandingPage = () => {


    return (
        <div className='landing-page-cta'>
            <h2>Beta Blog Express What's on Your Nog</h2>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(LandingPage);