<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 02c77ce8c9614b07c688ab1c6e4ee6b7ba8ddb46
import { motion } from "framer-motion";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

<<<<<<< HEAD
const Counter = ({ from = 0, to, suffix = "" }) => {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    let start = null;
    const duration = 3000; // 2 seconds
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * (to - from) + from);
      setCurrent(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrent(to);
      }
    };
    window.requestAnimationFrame(step);
    return () => setCurrent(from);
  }, [from, to]);

  return (
    <span>
      {current}{suffix}
    </span>
  );
};

const container = (delay) => ({
  whileInView: { opacity: 1, x: 0 },
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      duration: 1.2,
      delay: delay,
      ease: "easeOut"
    }
  }
});

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="aboout-right">
          <div className="about-para">
            <p>
              "Hello everyone My Name is Ashutosh singh and "I am a  Full Stack Web Developer from Delhi-NCR, India, with a strong foundation in Data Structures and Algorithms (DSA),
            </p>
            <p>
              and exceptional problem-solving skills. With over 200 challenging problems solved on LeetCode, I bring both technical expertise and a passion for crafting efficient, scalable solutions."
            </p>
          </div>
          <div className="about-skills">
            <motion.div
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="about-skill"
            >
              <p>C & C++</p> <hr style={{ width: "80%" }} />
            </motion.div>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="about-skill"
            >
              <p>JavaScript</p> <hr style={{ width: "65%" }} />
            </motion.div>
            <motion.div
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="about-skill"
            >
              <p>python</p> <hr style={{ width: "45%" }} />
            </motion.div>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="about-skill"
            >
              <p>Mysql</p> <hr style={{ width: "50%" }} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-achivments flex gap-6 justify-center items-center text-center">
        <div className="about-achivment">
          <h1 className="text-4xl font-bold text-blue-600">
            <Counter to={400} suffix="+" />
          </h1>
          <p>SOLVE QUESTION ON LEETCODE</p>
        </div>
        <hr className="h-12 border-gray-300" />
        <div className="about-achivment">
          <h1 className="text-4xl font-bold text-green-600">
            <Counter to={10} suffix="+" />
          </h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr className="h-12 border-gray-300" />
        <div className="about-achivment">
          <h1 className="text-4xl font-bold text-purple-600">
            <Counter to={2} suffix="+" />
          </h1>
          <p>HACKATHON QUALIFIED</p>
        </div>
      </div>
    </div>
  );
=======
const container =(delay) =>({
    whileInView:{opacity:1,x:0},
    hidden:{x:100,opacity:0},
    visible:{
        x:0,
        opacity : 1,
        transition:{duration: 1,delay:delay}
    }
});
const About = () =>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt=""/>          
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="aboout-right">
                    <div
                       className="about-para">
                        <p>"Hello everyone My Name is Ashutosh singh and "I am a  Full Stack Web Developer from Delhi-NCR, India, with a strong foundation in Data Structures and Algorithms (DSA),  </p>
                        <p>and exceptional problem-solving skills. With over 200 challenging problems solved on LeetCode, I bring both technical expertise and a passion for crafting efficient, scalable solutions."</p>
                    </div>
                    <div className="about-skills">
                        <motion.div   
                        variants={container(0)}
                    initial="hidden"
                     whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}  className="about-skill"> <p>C & C++</p> <hr style={{width:"80%"}} /> </motion.div>
                        <motion.div  
                        variants={container(0.5)}
                    initial="hidden"
                     whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} className="about-skill"> <p>JavaScript</p> <hr style={{width:"65%"}} /> </motion.div>
                        <motion.div  
                        variants={container(1)}
                    initial="hidden"
                     whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} className="about-skill"> <p>python</p> <hr style={{width:"45%"}} /> </motion.div>
                        <motion.div  
                        variants={container(1.5)}
                    initial="hidden"
                     whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}  className="about-skill"> <p>Mysql</p> <hr style={{width:"50%"}} /> </motion.div>
                    </div>
                </div>
            </div>
            <div className="about-achivments">
                <div className="about-achivment">
                    <h1>300+</h1>
                    <p>SOLVE QUETION ON LEETCODE</p>
                </div>
                <hr/>
                <div className="about-achivment">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achivment">
                    <h1>02+</h1>
                    <p>HACKATHON QUALIFIED</p>
                </div>
            </div>

        </div>
    );
>>>>>>> 02c77ce8c9614b07c688ab1c6e4ee6b7ba8ddb46
}

export default About