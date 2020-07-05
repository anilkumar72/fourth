import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion";
import {Container} from "react-bootstrap";


const Wrapper = styled(Container)`
width: 100vw;
height: 100vh;
max-width: 100%;
position: relative;
background-color: black;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 23vh;
align-items: center;
`;
const FooterDiv =styled(motion.div)`
.follow{
text-align: center;
font-size: 20px;
}
`;

const ConnectDiv =styled(motion.div)`
margin-bottom: 100px;
`;

const SocialDiv=styled(motion.div)`
display: flex;
flex-direction: row;
font-size: 70px;
margin-bottom: 50px;
margin-top: -25px;
a{
text-decoration: none;
color: white;
}
`
const LastDiv=styled(motion.div)`
bottom: 0;
display: flex;
justify-content: space-evenly;
width: 95vw;
align-items: center;
font-size: 30px;
`;

export default () => {
    return (
        <Wrapper>

            <FooterDiv>
                <ConnectDiv>We collaborate with ambitious brands and people. Let’s connect :)</ConnectDiv>
                <p className='follow'>Follow us</p>
                <SocialDiv>
                    <a href='#'>Facebook&nbsp;/&nbsp;</a>
                    <a href='#'>Twitter&nbsp;/&nbsp;</a>
                    <a href='#'>Instagram&nbsp;/&nbsp;</a>
                    <a href='#'>Pintrest</a>
                </SocialDiv>


            </FooterDiv>
            <LastDiv>
                <p>All Rights Reserved © Anil Kumar</p>
                <p>Made with <i>❤</i> by Anil Kumar Ghanta </p>
            </LastDiv>
        </Wrapper>
    )
}