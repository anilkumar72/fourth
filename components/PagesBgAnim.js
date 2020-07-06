import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 70vw;
height: 20vh;
position: absolute;
top: 55vh;
left: 30vw;
padding: 20px;
border: 1px solid black;
background-color: black;
`;

export default ({text}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}