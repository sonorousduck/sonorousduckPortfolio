import { React, useEffect } from "react";
import portrait from './../static/images/Ryan_Anderson.jpg'
import './../static/css/AboutMe.css'
import Navbar from "../Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons"

const About = () => {
    useEffect(() => {
        document.title = "About me"
    }, []);
    return (
        <div>
            <Navbar />
            <div className="centerChildren">
                <div className="mb-8">
                    <h1 className="font-sans font-semibold text-5xl">About Me</h1>
                </div>
                <img className="h-1/5 w-1/5 rounded-xl" src={portrait} alt="Ryan Anderson Portrait" />
                <div className="w-full justify-center flex flex-row mt-8">
                <FontAwesomeIcon icon="fa-solid fa-download" className=""/> 
                    <a className="btn w-4/12 mx-4" href={require("../static/documents/RyanAndersonResume.pdf")} download={"RyanAndersonResume.pdf"}>
                    <FontAwesomeIcon icon={faDownload} /> Resume
                    </a>
                    <a className="btn w-4/12 mx-4" href={require("../static/documents/RyanAndersonCV.docx.pdf")} download={"RyanAndersonCV.docx.pdf"}>
                    <FontAwesomeIcon icon={faDownload} />   CV
                    </a>
                </div>
                <div style={{ width: '50%', marginTop: 16, marginBottom: 16 }}>
                    <p>
                        My name is Ryan Anderson and I am a Master's Student at Utah State University currently working on a thesis in Game Engine Development, AI, and Robotics. 
                        I have a strong foundation in various programming languages including C++, Python, C#, and Javascript. When I am not working, 
                        I love to stay fit, draw, read, play video games and work on game development.
                    </p>
                </div>


               

            </div>
        </div>


    );
}

export default About;