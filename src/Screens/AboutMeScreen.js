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
                <div className=" w-1/2 my-12">
                    <p>
                        My name is Ryan Anderson and I am a Master's Student at Utah State University currently working on a thesis in Game Engine Development, AI, and Robotics. 
                        I have a strong foundation in various programming languages including C++, Python, C#, and Javascript. When I am not working, 
                        I love to stay fit, draw, read, play video games and work on game development.
                    </p>
                </div>

                <div className="mx-4">
                    <p className="font-semibold">Papers published</p>
                    <div className="divider"></div>
                    <ul className="list-disc mx-4 my-4">
                        <li><strong>Anderson, R.,</strong> Harper, M., (2023). Save Money, Get Charged: Facility-Tied Energy Management with Unknown and Unscheduled EV Charging. <em>International Conference on Intelligent Transportation Systems.</em></li>
                        <li><strong>Anderson, R.,</strong> Anderson, T., Bailey, C., Anderson, J., Harper, M., (2023) Stealth Centric A*: Bio-Inspired Navigation for Ground Robots. <em>International Robotics Conference.</em></li>
                        <li>Anderson, J., <strong>Anderson, R.,</strong> Anderson, T., Bailey, C., & Harper, M. (2023). Stealth Centric Autonomous Robot Simulator (SCARS). <em>Software Impacts,</em> 16, 100497.</li>
                        <li><strong>Anderson, R.,</strong> Anderson, J., Anderson, T., & Harper, M. (2023). Charger Reservation Web Application. <em>Software Impacts,</em> 18, 100589.</li>
                        <li><strong>Anderson, R.,</strong> Anderson, T., & Harper, M. (2022). Power and transportation collection and visualization. <em>Software Impacts,</em> 14, 100386.</li>
                    </ul>

                </div>

               

            </div>
        </div>


    );
}

export default About;