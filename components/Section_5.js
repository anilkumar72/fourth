import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import img from '../assets/img2.jpg'
import img2 from '../assets/pic4.png'


const Wrapper = styled.section`
width: 100vw;
height: 100vh;
max-width: 100%;
background-color: #191919;
z-index: 3;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const ImgBig = styled(motion.img)`
width: 40vw;
height: 60vh;
`
const ImgText = styled(motion.p)`
width: 40vw;
height: 60vh;
`

export default (props) => {
    return (
        <Wrapper>
            <ImgBig src={img} style={{scale:props.s5imgScale}}/>
            <ImgBig src={img2} style={{scale:props.s5imgScale}}/>
            <ImgText style={{scale: props.s5TextScale}}>
                Some great words from our clientimageimageimageimage
            </ImgText >
            <ImgText style={{scale: props.s5TextScale}}> Some great words from our clientimageimageimageimage</ImgText>
        </Wrapper>
    )
}