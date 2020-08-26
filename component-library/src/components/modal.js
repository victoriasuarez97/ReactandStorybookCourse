import React from 'react';
import styled from 'styled-components';
import { DefaultTheme, TypeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './buttons';

const Body = styled.body`
    margin: auto;
`
const ModalWrapper = styled.div `
    text-align: center;
    margin: 70px;
    width: 912px;
    height: 512px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${DefaultTheme.formElementBackgroundColor};
    color: ${DefaultTheme.textOnFormElementBackground};
    border-radius: 2px;
`
const SignUpHeader = styled.h3`
    font-size: ${TypeScale.header3};
    margin: 105px 100px 40px;
    float: left;
`
const SignUpText = styled.p`
    margin: 0px 105px;
    text-align: left;
    font-size: ${TypeScale.paragraph};
    max-width: 70%;
`
const CloseModalIcon = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 410px;
    top: 100px;
    width: 24px;
    height: 24px;
    padding: 0px;
`

export const SignUpModal = () => {
    return (
        <Body>
        <ModalWrapper>
            <img src={Illustrations.SignUp} style={{ margin: "105px", float: "right" }} alt="Sign up for an account" aria-hidden="true"/>
            <SignUpHeader>Sign Up</SignUpHeader>
            <br />
            <SignUpText>Sign up today to get access to all of our content and features. </SignUpText>
            <br />
            <PrimaryButton style={{ width: "20%", margin: "auto", position: "absolute" }}>Submit</PrimaryButton>
            <CloseModalIcon aria-label="Close Modal">
                <CloseIcon/>
            </CloseModalIcon>
        </ModalWrapper>
        </Body>
    )
}