import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";

// Animation Variant - Fade In from Bottom
const fadeInFromBottom = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const Skill = () => {
  return (
    <div id="skill" className="skill">
      {/* Title Section */}
      <motion.div
        className="skill-title"
        variants={fadeInFromBottom(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is visible
      >
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </motion.div>

      {/* Skills Container */}
      <div className="skill-container">
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className="services-format"
            variants={fadeInFromBottom(index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
