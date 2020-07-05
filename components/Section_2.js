import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container, Jumbotron} from "react-bootstrap";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import Heading from "../components/Text/Heading";


const Wrapper = styled(motion.div)`
padding-top: 30px;
background-color: #191919;
height: 70vh;
width: 100vw;
max-width:100%;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
z-index:8
`;


export default (props) => {

    return (
        <Wrapper >
            <motion.div style={{y:props.pro,scale:props.pro2}}>
                <div>
                    <Heading text='We can help to inspire you with' span=' new ideas for your home.'/>
                </div>
            </motion.div>
        </Wrapper>

    )
}