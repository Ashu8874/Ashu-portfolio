import React from "react";
import './Skill.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Skill = () =>{
    return (
        <div id="skill" className="skill"> 
             <div className="skill-title">
                <h1>My Skill</h1>
                <img src={theme_pattern} alt=""/>
             </div>
             <div className="skill-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        
                    </div>
                })}
             </div>
        </div>
    );
}

export default Skill