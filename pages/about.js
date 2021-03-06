import React from 'react'
import styled from 'styled-components'
import Layout from "../layout/Layout";
import Headerbg from "../components/Headerbg";
import {motion} from "framer-motion";


const Wrapper = styled.section`
position: absolute;
top: 0;
max-width: 100%;
width: 100vw;
height: 100vh;
z-index: -1;
`;
const ContentDiv =styled(motion.div)`
color: black;
`;

export default () => {
    return (
        <Layout>
            <Wrapper>
               <Headerbg text={'This is About page'}/>
               <ContentDiv>
               </ContentDiv>
            </Wrapper>
        </Layout>
    )
}