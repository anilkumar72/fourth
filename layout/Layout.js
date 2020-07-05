import React from 'react'
import styled from 'styled-components'
import Header from "../components/header/Header";


const Wrapper = styled.section`

`;

export default ({children}) => {
    return (
        <Wrapper>
            <Header/>
            {children}
        </Wrapper>
    )
}