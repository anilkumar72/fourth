
import React from "react";
import Section_1 from '../components/Section_1'
import Layout from "../layout/Layout";
import {motion,useTransform, useViewportScroll} from "framer-motion";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Section_4 from "../components/Section_4";
import Section_5 from "../components/Section_5";
import Section_6 from "../components/Section_6";



export default ()=> {

  const {scrollYProgress} = useViewportScroll();

  const sValue = useTransform(scrollYProgress, [0.1, 0.2], [0.5, 1.2])
  const sValue2 = useTransform(scrollYProgress, [0.1, 0.25], ['200px', '-50px'])
  const s3right = useTransform(scrollYProgress, [0.3, 0.42], ['-700px', '-0px'])
  const s3rightLeft = useTransform(scrollYProgress, [0.3, 0.42], ['-300px', '150px'])
  const s3rightScale = useTransform(scrollYProgress, [  0.3, 0.38], [0.2,0.35])
  const s3left = useTransform(scrollYProgress, [0.3, 0.42], ['-100px', '100px'])
  const s3leftTop = useTransform(scrollYProgress, [0.3, 0.42], ['100px', '-300px'])
  const s4leftTop = useTransform(scrollYProgress, [0.35, 0.45], ['-10px', '100px'])
  const s4imgScale = useTransform(scrollYProgress, [0.35, 0.45], [1, 1.2])
  const s5imgScale = useTransform(scrollYProgress, [0.5, 0.7], [0.01, 0.8])
  const s5TextScale = useTransform(scrollYProgress, [0.5, 0.85], [0.01, 0.8])
  return (
      <div>
        <Layout>
          <div>
            <Section_1 />
            <Section_2 pro={sValue2} pro2 ={sValue}/>
            <Section_3  pro={s3right} pro2={s3left} pro3={s3rightScale} s3rightLeft={s3rightLeft} s3leftTop={s3leftTop} />
            <Section_4 s4leftTop={s4leftTop} s4imgScale={s4imgScale}/>
            <Section_5 s5imgScale={s5imgScale} s5TextScale={s5TextScale}/>
            <Section_6/>
          </div>
        </Layout>
      </div>
  )
}
