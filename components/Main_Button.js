import React, {useState} from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import {motion} from 'framer-motion'


const Wrapper = styled(Button)`
width: 250px;
background: transparent;
`;

export default ({text}) => {
    const [clicked, setclicked] = useState(false)
    const variants = {
        active: {
            scale: 1,
            transition: {
                duration: '1'
            }
        },
        inactive: {
            scale: 1.1,
            transition: {
                duration: '1'
            }
        }
    };

    return (
        <motion.div onClick={() => setclicked(!clicked)} variants={variants} animate={clicked ? "active" : 'inactive'}>
            <Wrapper variant="primary" size="lg">
                {text}
                <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"/>
                </motion.svg>
            </Wrapper>
        </motion.div>
    )
}
