import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';


const Main = styled.main`
    box-sizing: border-box;
    width: 28rem;
    margin: 2rem auto 10rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    padding: 3rem 4.5rem 2rem;
    border-radius: 3px;

    flex: 1;
`;

export default function Formin() {
    return (
        <Main>
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
        </Main>
    );
}