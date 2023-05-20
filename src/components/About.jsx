import React from "react";
import './About.css'
import image1 from '../components/assest/glen.jpeg'
function About(){
    return(
        
        <div className="about" id="about">
            <div class="about__img">
                        <img src={image1} alt="" />
                    </div>
            <h1>Hi there <br /> Am called Glen</h1><br />
                        <h2 class="about__subtitle">I'am a Web Master</h2>

            <h4>About</h4>
            <p>Currently a student of Fomic Polytechnic Studying Software Engineering</p>

            <p>I have several years of experience in developing high-quality websites and mobile applications that are responsive, 
                user-friendly, and visually appealing. My skills include front-end and back-end development, database management, 
                User Experience (UX) design, server configuration, and deployment.</p>
        </div>
        
    );
}
export default About;
<About/> 