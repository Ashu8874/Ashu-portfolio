import React from "react"
import Navbar from "./Component/navbar/Navbar"
import Hero from "./Component/Hero/Hero"
import About from "./Component/about/About"
import Skill from "./Component/Skill/Skill"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Project from "./Component/my-projects/Project"


const App=() => {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Skill/>
   <Project/>
   <Contact/> 
   <Footer/>

    </div>
  )
}

export default App
