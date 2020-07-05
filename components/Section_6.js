import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
width: 100vw;
height: 100vh;
max-width: 100%;
position: relative;
background-color: black;
display: flex;
`;

export default () => {
    return (
        <Wrapper>
            <div>first</div>
            <div>Second</div>
            <div>third</div>
sd
        </Wrapper>
    )
}