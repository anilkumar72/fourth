import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import img from '../assets/img2.jpg'
import img2 from '../assets/pic4.png'




const Wrapper = styled.section`
width: 100vw;
height: 110vh;
max-width: 100%;
padding-top: 30px;
background-color: #191919;
z-index: 3;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
text-align: center;
`;

const ImgBig = styled(motion.img)`
width: 40vw;
height: 50vh;
border-radius: 10px;
`
const ImgText = styled(motion.p)`
padding-top: 70px;
width: 40vw;
height: 30vh;
`

export default (props) => {
    const imageStyles = {
        x: props.s5imgright,
        // x:props.s3rightLeft,
        // scale: props.pro3,
    }
    return (
        <Wrapper>
            <ImgText style={{scale: props.s5TextScale}}>
                "Be faithful to your own taste, because nothing you really like is ever out of style."
            </ImgText >
            <ImgBig src={img} style={imageStyles}/>
            <ImgBig src={img2}  style={imageStyles}/>
            <ImgText style={{scale: props.s5TextScale}}> "Design is not making beauty, beauty emerges from selection, affinities, integration, love."</ImgText>
        </Wrapper>
    )
}