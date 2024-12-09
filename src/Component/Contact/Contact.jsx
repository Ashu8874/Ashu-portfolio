import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5c35b565-48e6-439c-8f7a-9823fe718447");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return(
        <div id="contact" className="contact">
          <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern}   alt="" />
          </div>
          <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>This is My Portfolio website ,So if you wat to contact with me, so feel free to send me a message about anything that you want to work on. You can contact anytime. </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>ashutoshsingh2322003@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91 8874307866</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Delhi-NCR Noida India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                 <lable htmlFor="">Your Name</lable>
                  <input type="text" placeholder="Enter your name" name="name" />
                  <label htmlFor="">Your Email</label>
                  <input type="email" placeholder="Enter your email" name="email" />
                  <label htmlFor="">Write your message here</label>
                  <textarea name="message" rows="8" placeholder="Enter your message" ></textarea>
                  <button  type="submit" className="contact-submit">Submit Now</button>
            </form>
          </div>

        </div>
    );
}

export default Contact