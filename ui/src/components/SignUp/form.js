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
`

const Form = styled.form`
    & h1 {
        margin: 0 0 2rem 0;
        color: white;
    }
`

const Input = styled.input`
    background-color: #454545;
    border: 0;
    border-radius: 5px;
    color: #fff;
    padding: 0.9rem 0;
    text-indent: 1rem;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 0 1.5rem;
    cursor: default;
    outline: 0;
    width: 100%;
    ::placeholder {
        text-align: center;
        text-indent: -0.1rem;
    }
`

const Button = styled.button`
    background-color: #e50914;
    border: 0;
    border-radius: 5px;
    color: #fff;
    padding: 0.9rem;
    width: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1rem 0 8rem;
    cursor: pointer;
    outline: 0;
`

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
        margin: 0.5rem 0;
        color: rgb(112, 112, 112);
    }
`

export default function Formin() {
    return (
        <Main>
            <Form>
                <h1>Sign Up</h1>
                {/* <label>Email or phone number</label> */}
                <Input type='email' align='left' placeholder='Username' />
                <Input type='text' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Repeat Password' />
                <Button>Sign Up</Button>
                <Social>
                    <div>
                        <SocialIcon url='http://facebook.com/rvgallego' />
                    </div>
                    <p>Login with Facebook</p>
                </Social>
            </Form>
        </Main>
    );
}