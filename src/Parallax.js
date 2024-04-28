
import { useRef } from "react";
import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"; //

export default function Parallax({type}) {

    const ref=useRef();
    const {scrollYProgress}=useScroll({
        target:ref,
       offset:["start start", "end start"],
    });
    const ytxt=useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);// color:"white" 
    const yBg=useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);// color:"white" 
  return (
    
    <motion.div className='parallax' ref={ref} style={{background:type==="Projects"?"linear-gradient(180deg, rgb(30, 30, 79) ,rgb(19, 19, 44) )":"linear-gradient(180deg, rgb(30, 30, 79) ,rgb(78, 78, 173) )"}}>
        <motion.h1 style={{y:ytxt,color:"white"}}>{type==="Projects"?"Projects":"Skills"}</motion.h1> 
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y:yBg, backgroundImage:`url(${type==="Projects"? "/planets.png": "/sun.png"})`}}></motion.div>
        <motion.div className="stars" style={{x:yBg}}></motion.div>
    </motion.div>
  )
}
