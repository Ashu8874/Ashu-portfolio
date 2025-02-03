import React from "react";
import './Hero.css';
import profile_img from '../../assets/ashu_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Ashutosh_Resume.pdf'; // Ensure you place your resume file in the appropriate directory

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img   src={profile_img} alt="Ashutosh Singh Profile" />
            <h1>
                <span>I'm Ashutosh Singh,</span> Full Stack Web Developer in India.
            </h1>
            <p>
            "I am a Full Stack Developer from Delhi-NCR, India, skilled in DSA and problem-solving, with over 300 LeetCode challenges solved, showcasing my technical expertise and passion for coding."            </p>
            <div className="hero-action">
                <AnchorLink className="anchor-link" href="#contact">
                    <div className="hero-conect">Connect With Me</div>
                </AnchorLink>
                <a href={resume} className="hero-resume" download="Ashutosh_Singh_Resume.pdf">
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Hero;
