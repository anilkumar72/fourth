import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";


const Wrapper = styled(motion.section)`
width: 100%;
height: 70vh;
overflow: hidden;
display: flex;
align-items: center;
justify-content: space-evenly;
`;
const BgImg=styled(motion.div)`
position: absolute;
width: 100vw;
max-width: 100%;
overflow: hidden;
height: 70vh;
background-image: url("/counter-bg.jpg");
background-position: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-left: 10%;
`

const TextDiv =styled(motion.div)`
display: flex;
justify-content: space-evenly;
flex-direction: row;
overflow: hidden; 
width: 25vw ;
`;

export default (props) => {
    return (
        <Wrapper >
            <BgImg>
                <p>Our many years of experience in numbers</p>
                <TextDiv >
                    <div>
                        <p>100 +</p>
                        <p>Projects</p>
                    </div>
                    <div>
                        <p>5+</p>
                        <p>years</p>
                    </div>
                </TextDiv>
            </BgImg>

        </Wrapper>

    )
}