import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import Link from "next/link";


const Wrapper = styled.section`
color: white;
display: flex;
justify-content: flex-start;
padding-left: 15vw;
padding-top: 15vh;
align-items: flex-start;
width: 100%;
height: 100vh;
`;
const SidebarDiv = styled(motion.div)`
color: white;

`;
const MotionLi = styled(motion.li)`
list-style-type: none;
font-size: 70px;
`;
const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const MotionUl =styled(motion.ul)`

`;
const variantsUl = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
export default () => {
    return (
        <Wrapper>
            <SidebarDiv>
                <MotionUl variants={variantsUl}>
                    <MotionLi variants={variantsLi}
                               whileHover={{scale: 1.1,y:'-10px'}}
                               whileTap={{scale: 0.95}}><Link href='/index'><a>Home</a></Link></MotionLi>
                    <MotionLi variants={variantsLi}
                               whileHover={{scale: 1.1,y:'-10px'}}
                               whileTap={{scale: 0.95}}><Link href='/about'><a>About</a></Link></MotionLi>
                    <MotionLi variants={variantsLi}
                               whileHover={{scale: 1.1,y:'-10px'}}
                               whileTap={{scale: 0.95}}><Link href='/services'><a>Services</a></Link></MotionLi>
                    <MotionLi variants={variantsLi}
                               whileHover={{scale: 1.1,y:'-10px'}}
                               whileTap={{scale: 0.95}}><Link href='/contact'><a>COntact</a></Link></MotionLi>
                </MotionUl>
            </SidebarDiv>
        </Wrapper>
    )
}