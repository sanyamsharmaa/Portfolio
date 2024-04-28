import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
export default function AboutMe() {
  return (
    <>
        <div id="AbtHd">About Me</div>
    <div className="AboutCont" >
    {/* style={{backgroundColor:theme==='day'?'white':'blue'}} */}
        <div className="Abtxt"  data-aos="fade-right"> As a React developer, I craft dynamic, engaging web experiences with pixel-perfect precision. Beyond building beautiful front-ends, my exploration of the MERN stack has equipped me with a grasp of full-stack development principles. Eager to learn and collaborate, I thrive on turning innovative ideas into reality. Let's code something impactful together!</div>
        <div className="Abtbox"  data-aos="fade-left"><img src="https://cdn.dribbble.com/users/4415359/screenshots/12483759/media/8262513d57658cc7c053ba9c68024438.gif" alt="" width={"100%"}/></div>
    </div>
    </>
  )
}
