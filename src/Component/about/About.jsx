import React from "react";
import { motion } from "framer-motion";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                    <div className="about-para">
                        <p>"Hello everyone My Name is Ashutosh singh and "I am a  Full Stack Web Developer from Delhi-NCR, India, with a strong foundation in Data Structures and Algorithms (DSA),  </p>
                        <p>and exceptional problem-solving skills. With over 200 challenging problems solved on LeetCode, I bring both technical expertise and a passion for crafting efficient, scalable solutions."</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>C & C++</p> <hr style={{width:"80%"}} /> </div>
                        <div className="about-skill"> <p>JavaScript</p> <hr style={{width:"65%"}} /> </div>
                        <div className="about-skill"> <p>python</p> <hr style={{width:"45%"}} /> </div>
                        <div className="about-skill"> <p>Mysql</p> <hr style={{width:"50%"}} /> </div>
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
}

export default About