import React from 'react';
// import logoTop from '../../img/logo-top.png';
import '../css/signin.css';
import { SocialIcon } from 'react-social-icons';
import Header from '../component/header';
import Formin from '../component/formin';
// import styled from 'styled-components';

// const Button = styled.button`

// `

export default function signIn() {
    return (
        <div className="bodySignin">
            <Header/>
            <Formin/>
        
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
