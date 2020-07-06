import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";


const Wrapper = styled(motion.button)`
width: 200px;
height: 55px;
    padding: 15px 45px;
    font-size: 17px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1;
    background-image: linear-gradient(to right,#f41351,#eb1c23);
    transition: none;
    border-radius: 60px;
    outline: none;
    color: #FFF;
    font-family: 'HelveticaNeueLT_iTechArt',Arial,sans-serif;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 1;

`;

export default ({title}) => {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    )
}