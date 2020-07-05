import Head from 'next/head'
import React from "react";
import {Container} from "react-bootstrap";
import Section_1 from '../components/Section_1'
import Layout from "../layout/Layout";
import {motion,useTransform, useViewportScroll} from "framer-motion";



export default ()=> {

  const {scrollYProgress} = useViewportScroll();
  const {scrollY} = useViewportScroll();

  const sValue = useTransform(scrollYProgress, [0.5, 1], [0.5, 1.2])
  const sValue2 = useTransform(scrollYProgress, [0.5, 0.7], ['200px', '-50px'])
  const s3right = useTransform(scrollYProgress, [1, 2], ['-700px', '-0px'])
  const s3rightLeft = useTransform(scrollYProgress, [1, 2], ['-300px', '150px'])
  const s3rightScale = useTransform(scrollYProgress, [  1, 1.5], [0.2,0.35])
  const s3left = useTransform(scrollYProgress, [1, 2], ['-100px', '100px'])
  const s3leftTop = useTransform(scrollYProgress, [1, 2], ['100px', '-300px'])
  const s4leftTop = useTransform(scrollYProgress, [2, 3], ['-10px', '100px'])
  const s4imgScale = useTransform(scrollYProgress, [2, 3], [1, 1.2])
  const s5imgScale = useTransform(scrollYProgress, [2.5, 3.5], [0.01, 0.8])
  const s5TextScale = useTransform(scrollYProgress, [2.9, 3.5], [0.01, 0.8])
  return (
      <div>
        <Layout>
          <div>
            <Section_1 />
            {/*<Section_2 pro={sValue2} pro2 ={sValue}/>*/}
            {/*<Section_3  pro={s3right} pro2={s3left} pro3={s3rightScale} s3rightLeft={s3rightLeft} s3leftTop={s3leftTop} />*/}
            {/*<Section_4 s4leftTop={s4leftTop} s4imgScale={s4imgScale}/>*/}
            {/*<Section_5 s5imgScale={s5imgScale} s5TextScale={s5TextScale}/>*/}
            {/*<Section_6/>*/}
          </div>
        </Layout>
      </div>
  )
}
