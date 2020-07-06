import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import {motion,useCycle} from "framer-motion";
import {MenuToggle} from "./Menu/MenuToggle";
import Navigation from "./Navigation";
import Color_button from "../Color_button";

const {useRef} = require("react");

const Wrapper = styled(Navbar)`
.background {
  position: absolute;
  top: 0;
  left: 0;
 width: 100%;
  height: 100vh;
  background: black;
  z-index: 100;
}

nav {
position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  z-index: 201;
  max-width: 100%;
  width: 100vw;
  height: 13vh;
border-bottom: 1px solid rgba(255,255,255,0.79);
align-items: center;
a{
color: white;
text-decoration: none;
}
}`;

const sidebar = {
    open:  ({
        clipPath: `circle(2000px at 50px 50px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 70px 55px)",
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 40,
            delay:0.5
        }
    }
};

const HeaderDiv =styled.div` 
  width: 100vw;
  max-width: 100%;
  display: flex;
  margin-left: 100px;
  justify-content: space-between;
  align-items: center; 
  margin-right: 100px;
 
`;

export default () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <Wrapper>
            <div>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                >

                    <motion.div className="background" variants={sidebar} >

                        <Navigation/>

                    </motion.div>
                    <MenuToggle toggle={() => toggleOpen()} />
                    <HeaderDiv>
                        <a href='#'>Logo</a>
                        <Color_button title='Contact us'/>
                    </HeaderDiv>
                </motion.nav>
            </div>

        </Wrapper>
    )
}