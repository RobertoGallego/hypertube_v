import React from 'react';
import logoTop from '../../img/logo-top.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
    width: 15%;
    margin: 1rem 2rem;
`;

export default function Header() {
    return (
        <div>
            <Link to="/"><Img src={logoTop} alt='Netflix' /></Link>
        </div>
    );
}