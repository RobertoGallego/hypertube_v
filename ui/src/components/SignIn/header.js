import React from 'react';
import logoTop from '../../img/logo-top.png';
import styled from 'styled-components';

const Img = styled.img`
    margin: 1rem 2rem;
`;

export default function Header() {
    return (
        <div>
            <Img src={logoTop} alt='Netflix' />
        </div>
    );
}