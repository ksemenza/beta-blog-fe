import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/home.css'
import MainPage from './MainPage'


const Homepage = props => {
    let fname = localStorage.getItem('fname')

    return (
        <div className='home-cta'>
            <div className='title-nav-wrap'>
            <Header />
                </div>
            <div className='home-wrap'>
                <h4 className='home-header'>Welcome {fname}</h4>
            </div>
<MainPage/>
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