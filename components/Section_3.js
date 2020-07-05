import React from 'react'
import styled from 'styled-components'
import img from '../assets/pic3.png'
import {motion} from "framer-motion";


const Wrapper = styled(motion.section)`
width: 100vw;
max-width:100%;
height: 100vh;
overflow: hidden;
background-color: black;

`;
const ImageDiv =styled(motion.div)`
width: 100vw;
height: 90vh;
@media (min-width: 576px) and (max-width: 767.98px) { 
width: 10vw;
height: 70vh;
z-index: 12;

 }
`;
const TextDiv =styled(motion.div)`

`;


export default (props) => {
    const imageStyles = {
        y: props.pro,
        x:props.s3rightLeft,
        scale: props.pro3,
    }
    const textStyles={
        x: props.pro2,
        y:props.s3leftTop,
        width: '400px',
    }
    return (
        <Wrapper>
            <ImageDiv style={imageStyles}>
                <motion.img src={img} alt='img'/>
            </ImageDiv>
            <TextDiv style={textStyles}>
                <h1>We can help to inspire you with new ideas for your home.</h1>
            </TextDiv>
        </Wrapper>
    )}