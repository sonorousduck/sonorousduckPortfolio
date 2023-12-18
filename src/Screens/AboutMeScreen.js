import {React, useEffect} from "react";
import { Typography } from "@mui/material";
import portrait from './../static/images/Ryan_Anderson.jpg'
import './../static/css/AboutMe.css'

const About = () => {
    useEffect(() => {
        document.title = "About me"
      }, []);
  return (
      <div className="centerChildren">
        <Typography variant="h1">About Me</Typography>
        <img style={{width: 400, height: "auto"}} src={portrait} alt="Ryan Anderson Portrait" />

        <div style={{ width: '50%', marginTop: 16, marginBottom: 16 }}>

            <Typography style={{paddingLeft: 8, paddingRight: 8}} >My name is Ryan Anderson and I am a PhD Student at Utah State University currently working towards a Concurrent Master's in Game Engine Development, AI and Robotics. 
            {/* and a PhD in Robotics and Uncertainty. */}
            
            </Typography>
            <br/>

        </div>

        <div className="contactInformation">
            <Typography >
                <a style={{marginRight: 32}} href="mailto: sonorousduck@gmail.com">
                Email
                </a>
            </Typography>
            <Typography>
                <a style={{marginRight: 32}} href="https://www.linkedin.com/in/sonorousduck/">
                    LinkedIn
                </a>
            </Typography>
        </div>

    </div>

    
  );
}

export default About;