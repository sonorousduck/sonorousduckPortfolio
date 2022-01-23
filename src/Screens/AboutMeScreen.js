import React from "react";
import { Typography } from "@mui/material";
import portrait from './../static/images/Ryan_Anderson.jpg'
import './../static/css/AboutMe.css'

const About = () => {
  return (
      <div className="centerChildren">
        <Typography variant="h1">About Me</Typography>
        <img style={{width: 400, height: "auto"}} src={portrait} alt="Ryan Anderson Portrait" />

        <div style={{ width: '50%', marginTop: 16, marginBottom: 16 }}>

            <Typography style={{paddingLeft: 8, paddingRight: 8}} >My name is Ryan Anderson and I am a senior at Utah State University currently working towards a dual major in Computational Mathematics and Computer Science. 
            Afterwards, I plan to pursue a Master's degree in Computer Science specializing in Artificial Intelligence and Robotics.
            </Typography>
            <br/>

            <Typography style={{paddingLeft: 8, paddingRight: 8}}> 
                Additionally, I work as a Software Engineer Intern at Juniper Systems. On a daily basis, I work with C#, .NET, Blazor, and Xamarin. 
            </Typography>

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