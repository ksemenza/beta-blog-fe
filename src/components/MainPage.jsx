import React, { useEffect, useState } from 'react'
import {axiosAuth} from '../api/axiosAuth'
import { connect } from 'react-redux'
import {POST_URL} from '../constants/endpoints'

// RETURNS ALL POST IN SYSTEM
const MainPage = (props) => {

    useEffect(() => {
         axiosAuth()
        .get(`${POST_URL}`)
  
        .then((res) => {
            console.log(res.data)

        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    
    }, [])


    return (
        <div className='post-view-cta'>
            <h2></h2>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(MainPage)