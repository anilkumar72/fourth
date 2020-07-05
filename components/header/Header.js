import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Wrapper = styled(Navbar)`
position: sticky;
width: 100%;
height: 14vh;
z-index: 20;
border-bottom: 1px solid rgba(255,255,255,0.79);
`;

export default () => {
    return (
        <Wrapper>
            from header
        </Wrapper>
    )
}