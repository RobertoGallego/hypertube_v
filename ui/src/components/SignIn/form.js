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
    & H1 {
        margin: 0 0 2rem 0;
        color: white;
    }
`

const Input = styled.input`
    background-color: #454545;
    border: 0;
    border-radius: 5px;
    color: #fff;
    padding: 0.9rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0 0 1.5rem;
    cursor: default;
    outline: 0;
    width: 100%;
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

const Info = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    font-size: 14px;
    margin: 1rem 0 0;
`

const Check = styled.input`
    position: absolute;
    border: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
`

const Title = styled.p`
    margin: 0 0 0 1.5rem;
    color: rgb(112, 112, 112);
`

const Link = styled.a`
    color: rgb(112, 112, 112);
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Social = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    & p {
        margin: 0.5rem 0;
        color: rgb(112, 112, 112);
    }
`

const Signup = styled.div`
    display: flex;
    align-content: center;
    justify-content: flex-start;
    & p {
        margin: 1rem 0;
        color: rgb(112, 112, 112);
    }
    & a {
        margin: 1rem 1.5rem;
        color: #fff;
        text-decoration: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export default function Formin() {
    return (
        <Main>
            <Form>
                <h1>Sign In</h1>
                {/* <label>Email or phone number</label> */}
                <Input type='text' placeholder='Email or username' />
                <Input type='password' placeholder='Password' />
                <Info>
                    <label>
                        <Check type='checkbox' />
                        <Title>Remember me</Title>
                    </label>
                    <Link href='/#'>Need help?</Link>
                </Info>
                <Button>Sign In</Button>
            </Form>
            <Social>
                <div>
                    <SocialIcon url='http://facebook.com/rvgallego' />
                </div>
                <p>Login with Facebook</p>
            </Social>
            <Signup>
                <p>New to Hypertube?</p>
                <a href='/#'>Sign up now.</a>
            </Signup>
        </Main>
    );
}