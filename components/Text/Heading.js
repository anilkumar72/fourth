import React from 'react'
import styled from 'styled-components'
import {Jumbotron} from "react-bootstrap";


const Wrapper = styled.section`

`;
const SubWrapper = styled(Jumbotron)`
  
width: 60vw;
max-width:100%;
background:transparent;
@media screen and (max-width: 900px){
width: 80vw;
}
`;
const S2h1 =styled.h1`
font-size:80px;

@media screen and (max-width: 900px){
font-size:68px;
}

@media screen and (max-width: 768px){
font-size:58px;
padding-top: 40px;
}

`;


export default ({text,span}) => {
    return (
        <Wrapper fluid>
            <SubWrapper>
                <S2h1>{text}<span style={{color:'#09f'}}>{span} </span></S2h1>
            </SubWrapper>
        </Wrapper>
    )
}