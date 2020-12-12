import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/home.css'
import MainPage from './MainPage'
import UserDetails from '../details/UserDetails'


const Homepage = props => {
    let fname = localStorage.getItem('fname')

    return (
        <div className='home-cta'>
            <div className='title-nav-wrap'>
            <Header />
                </div>
            <div className='home-wrap'>
                <h4 className='home-header'>Welcome {fname}</h4>
                <MainPage />
                <UserDetails/>
            </div>

            <Footer/>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state,

    };
  };
  
  export default connect(mapStateToProps)(Homepage);