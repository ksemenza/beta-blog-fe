import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import '../assets/css/home.css'
import MainPage from './MainPage'
import Comment from '../comment/Comment'
import CommentSingle from '../comment/CommentSingle'
import CommentAdd from '../comment/CommentAdd'


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