import React from 'react'
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from "../assets/images/main.svg"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex necessitatibus et id laudantium voluptate hic tempora a beatae magnam?</p>
          <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing