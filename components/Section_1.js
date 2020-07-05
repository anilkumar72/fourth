import React from 'react'
import styled from 'styled-components'
import {Container} from "react-bootstrap";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import Main_Button from "./Main_Button";


const Wrapper = styled(Container)`
height: 86vh;
padding:0;
`;

const Div = styled.div`
position: fixed;
z-index: -1;
top: 0;
`;
const Video = styled.video`

width: 100vw;
max-width: 100%;
height:100vh;
background-position: center;
object-fit: cover;
background-size: cover;
 z-index: 1;
`;
const Overlay =styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.71);
  z-index: 2;
  position: absolute;
  top: 0;
`;
const Headingdiv=styled(motion.div)`
    padding-top: 40px;
    margin-top: 15vh;
    margin-left: 15vw;
    height:80vh;
    width: 70vw;
    z-index: 102;
    display: flex;
    flex-direction: column;
    align-items:flex-start ;
    @media screen and (max-width: 600px){
    width: 90vw;
    margin-left: 5vw;
     margin-right: 5vw;
    }
      @media screen and (max-width: 900px){
      width: 90vw;
      margin-left: 5vw;
    }
`
const HeadingH1=styled(motion.h1)`
font-family: Roboto,sans-serif;
font-size: 57px;
line-height: 80px;
font-weight: 400;
margin-bottom: 30px;
width: 60%;
 @media screen and (max-width: 600px){
    width: 90vw;}
  @media screen and (max-width: 900px){
    width: 90vw;}
`
const HeaderSpan= styled(motion.span)`

color: #ff4713;
`;

export default () => {


    return (
        <Wrapper fluid>
            <Div>
            <Video src='https://res.cloudinary.com/di5zpvhui/video/upload/v1593542892/video1_jszyia.mp4'
                   muted='muted' autoPlay='autoPlay' loop='loop'/>
            <Overlay/>
            </Div>
                <Headingdiv style={{x:1}}>
                    <HeadingH1>
                        Start your home interiors journey,
                        <HeaderSpan> from the comfort of your home</HeaderSpan></HeadingH1>
                    <Main_Button text='Learn More '/>
                </Headingdiv>
        </Wrapper>
    )
}