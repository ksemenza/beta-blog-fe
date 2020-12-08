import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'


const Homepage = props => {
    let fname = localStorage.getItem('fname')

    return (
        <div className='home-cta'>
            <Header/>
            <div className='home-wrap'>
                <h2 className='home-header'>Welcome {fname}</h2>
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