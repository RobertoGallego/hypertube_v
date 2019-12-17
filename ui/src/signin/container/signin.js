import React from 'react';
import logoTop from '../../img/logo-top.png';
import '../css/signin.css';
import { SocialIcon } from 'react-social-icons';
// import styled from 'styled-components';

// const Button = styled.button`

// `

export default class App extends React.Component {
  render() {
    return (
      <div className="bodySignin">
        <div className='header'>
          <img src={logoTop} alt='Netflix' />
        </div>
        <div className='main'>
          <form>
            <h1>Sign In</h1>
            {/* <label>Email or phone number</label> */}
            <input
              className='login'
              type='text'
              placeholder='Email or phone number'
            />
            <input className='login' type='password' placeholder='Password' />
            <div className='info'>
              <label>
                <input className='checking' type='checkbox' />
                <p>Remember me</p>
              </label>
              <a href='/#'>Need help?</a>
            </div>
            <button className='login-button'>Sign In</button>
          </form>
          <div className='social'>
            <div>
              <SocialIcon
                className='icon'
                iconSize='10'
                url='http://facebook.com/rvgallego'
              />
            </div>
            <p>Login with Facebook</p>
          </div>
          <div className='signup'>
            <p>New to Hypertube?</p>
            <a href='/#'>Sign up now.</a>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-a'>
            <p>Questions? Call</p>
            <a href='/#'>085-220-626</a>
          </div>
          <div className='footer-b'>
            <a href='/#'>Gift Card Terms</a>
            <a href='/#'>Terms of Use</a>
            <a href='/#'>Privacy Statement</a>
          </div>
          <div className='footer-c'>
            <select>
              <option value='0'>English</option>
              <option value='1'>Français</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
