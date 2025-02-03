import React, { useState ,useRef} from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar =() => {
const [menu,setmenu] = useState("home");
const menuRef =useRef();

const openMenu =() =>{
    menuRef.current.style.right="0";
}
const closeMenu =() =>{
    menuRef.current.style.right="-350px";
}

    return (
        <div className="navbar">
            <div className="logo">
            <h1> Ashu</h1>
            <img src={underline} alt=''/>
            </div>
            <img src={menu_open} onClick={openMenu} alt=""  className="nav-mob-open"/>
           <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
              <li><AnchorLink className="anchor-link" href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href='#skill'><p onClick={()=>setmenu("skill")}>My skill</p></AnchorLink>{menu==="skill"?<img src={underline} alt=''/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href='#projects'><p onClick={()=>setmenu("my-projects")}>Projects</p></AnchorLink>{menu==="my-projects"?<img src={underline} alt=''/>:<></>}</li>
              <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
           </ul>

           <AnchorLink className="anchor-link"  href='#contact'><div className="nav-conect"  onClick={()=>setmenu("contact")}>Connect With Me</div></AnchorLink>
        </div>
    );
}

export default Navbar