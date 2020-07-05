import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import {motion,useCycle} from "framer-motion";
import {MenuToggle} from "./Menu/MenuToggle";

const {useRef} = require("react");

const Wrapper = styled(Navbar)`
position: relative;
width: 100%;
height: 14vh;
z-index: 20;
border-bottom: 1px solid rgba(255,255,255,0.79);

.background {
  position: absolute;
  top: 0;
  left: 0;
  width:100vw;
  height: 100vh;
  background: rgb(255,255,255);
  z-index: 100;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 201;
  width: 300px;
}`;

const sidebar = {
    open:  ({
        clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};



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
                    <motion.div className="background" variants={sidebar} />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
            </div>
            from header
        </Wrapper>
    )
}