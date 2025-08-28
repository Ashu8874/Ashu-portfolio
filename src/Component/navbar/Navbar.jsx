import React, { useState, useRef } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (item) => {
    setMenu(item);
    closeMenu(); // Close menu after selecting an option
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1> Ashu</h1>
        <img src={underline} alt='' />
      </div>

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        
        <li>
          <AnchorLink className="anchor-link" href='#home' onClick={() => handleMenuClick("home")}>
            <motion.p 
              whileTap={{ scale: 0.95 }} 
              className={menu === "home" ? "active" : ""}
            >
              Home
            </motion.p>
          </AnchorLink>
          {menu === "home" && <motion.img src={underline} alt='' initial={{ width: 0 }} animate={{ width: "80%" }} />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href='#about' onClick={() => handleMenuClick("about")}>
            <motion.p 
              whileTap={{ scale: 0.95 }} 
              className={menu === "about" ? "active" : ""}
            >
              About Me
            </motion.p>
          </AnchorLink>
          {menu === "about" && <motion.img src={underline} alt='' initial={{ width: 0 }} animate={{ width: "80%" }} />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href='#skill' onClick={() => handleMenuClick("skill")}>
            <motion.p 
              whileTap={{ scale: 0.95 }} 
              className={menu === "skill" ? "active" : ""}
            >
              My Skill
            </motion.p>
          </AnchorLink>
          {menu === "skill" && <motion.img src={underline} alt='' initial={{ width: 0 }} animate={{ width: "80%" }} />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href='#projects' onClick={() => handleMenuClick("my-projects")}>
            <motion.p 
              whileTap={{ scale: 0.95 }} 
              className={menu === "my-projects" ? "active" : ""}
            >
              Projects
            </motion.p>
          </AnchorLink>
          {menu === "my-projects" && <motion.img src={underline} alt='' initial={{ width: 0 }} animate={{ width: "80%" }} />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href='#contact' onClick={() => handleMenuClick("contact")}>
            <motion.p 
              whileTap={{ scale: 0.95 }} 
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </motion.p>
          </AnchorLink>
          {menu === "contact" && <motion.img src={underline} alt='' initial={{ width: 0 }} animate={{ width: "80%" }} />}
        </li>
      </ul>

      <AnchorLink className="anchor-link" href='#contact'>
        <div className="nav-conect" onClick={() => handleMenuClick("contact")}>Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
