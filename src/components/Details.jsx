import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'
import {USER_ID} from '../constants/local_storage'

const Details = (props) => {

    console.log(props.location.pathname)

        useEffect(() => {
         axiosAuth()
        .get(`${props.location.pathname}`)
  
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

export default connect(mapStateToProps)(Details)