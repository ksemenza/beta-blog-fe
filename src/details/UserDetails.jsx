import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'

const UserDetails = (props) => {

    const user_id = localStorage.getItem('user_id')

              useEffect(() => {
                axiosAuth()
        .get(`auth/${user_id}/details`)
                    .then((res) => {
                        console.log(res.data)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    },[])

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

export default connect(mapStateToProps)(UserDetails)