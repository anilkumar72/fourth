import React from 'react'
import styled from 'styled-components'
import img from '../assets/pic5.png'
import {Overlay} from "react-bootstrap";
import PagesBgAnim from "./PagesBgAnim";


const Wrapper = styled.section`

`;
const Bgimg =styled.img`
position: relative;
top: 0;
left: 0;
width: 100vw;
height: 70vh;
max-width: 100%;
background-position: bottom;
background-size: cover;
z-index: -1;
`;
const Bgoverlay =styled.div`
position: absolute;
top: 0;
width: 100vw;
height: 70vh;
max-width: 100%;
background-color: rgba(0,0,0,0.62);
`;

export default ({text}) => {
    return (
        <Wrapper>
        <Bgimg src={img}/>

        <Bgoverlay/>
        <PagesBgAnim text={text}/>
        </Wrapper>
    )
}