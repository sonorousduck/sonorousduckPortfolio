import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faDigitalOcean, faJava, faJs, faNodeJs, faPython, faReact, faUnity, faVuejs } from "@fortawesome/free-brands-svg-icons";
import cppLogo from "../static/images/c++_logo.svg"
import csharpLogo from "../static/images/csharp_logo.svg"
import pytorchLogo from "../static/images/PyTorch_logo.svg"
import rosLogo from "../static/images/ros_logo.svg"
import openGLLogo from "../static/images/opengl-logo.svg"
import gazeboLogo from "../static/images/Gazebo_logo.svg"
import reactNativeLogo from "../static/images/react-native-logo.png"
import expoLogo from "../static/images/expo_logo.svg"
import firebaseLogo from "../static/images/Firebase_logo.svg"
import djangoLogo from "../static/images/django-icon-svgrepo-com.svg"
import daisyLogo from "../static/images/daisyui.svg"
import tensorflowLogo from "../static/images/tensorflow.svg"
import opencvLogo from "../static/images/opencv.svg"
import restLogo from "../static/images/connectivity-svgrepo-com.svg"


/* Props format for a short post
  title: title for the post
  image: the relative path to the images
  alt: the alt for the image
  description: a short description of the project
  link: the link the card should take you to on click
*/
const Logo = (props) => {
    switch (props.icon) {
        case "Java":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faJava} className="size-14" />
                </div>
            );
        case "Python":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faPython} className="size-14" />
                </div>

            );
        case "Javascript":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faJs} className="size-14" />
                </div>

            );
        case "C++":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={cppLogo} alt="cppLogo" className="size-14" />
                </div>

            );
        case "C#":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={csharpLogo} alt="csharpLogo" className="size-14"/>
                </div>

            );
        case "Unity":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faUnity} className="size-14" />
                </div>
            );
        case "PyTorch":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={pytorchLogo} alt="pytorchLogo" className="size-14" />
                </div>

            );
        case "ROS2":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={rosLogo} alt="ros2Logo" className="size-16" />
                </div>

            );
        case "OpenGL":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={openGLLogo} alt="openGlLogo" className="size-14" />
                </div>

            );
        case "Gazebo":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                   <img src={gazeboLogo} alt="gazeboLogo" className="size-16" />
                </div>

            );
        case "React":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faReact} className="size-14" />
                </div>

            );
        case "React Native":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={reactNativeLogo} alt="reactNativeLogo" className="size-14" />
                </div>

            );
        case "Expo":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={expoLogo} alt="expoLogo" className="size-14" />
                </div>

            );
        case "Firebase":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={firebaseLogo} alt="firebaseLogo" className="size-14" />
                </div>

            );
        case "REST":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={restLogo} alt="restLogo" className="size-14" />
                </div>

            );
        case "NodeJS":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faNodeJs} className="size-14" />
                </div>

            );
        case "Django":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={djangoLogo} alt="djangoLogo" className="size-14" />
                </div>

            );
        case "Vue":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faVuejs} className="size-14" />
                </div>

            );
        case "Digital Ocean":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faDigitalOcean} className="size-14" />
                </div>

            );
        case "AWS":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <FontAwesomeIcon icon={faAws} className="size-14" />
                </div>

            );
        case "DaisyUI":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={daisyLogo} alt="daisyLogo" className="size-14" />
                </div>

            );
        case "Tensorflow":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={tensorflowLogo} alt="tensorflowLogo" className="size-14" />
                </div>

            );
        case "OpenCV":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={opencvLogo} alt="opencvLogo" className="size-14" />
                </div>

            );
        case "ROS1":
            return (
                <div className="tooltip mx-2" data-tip={props.icon}>
                    <img src={rosLogo} alt="ros1Logo" className="size-16" />
                </div>

            );
        default:
            return (
                <></>
            )
    }


}

export default Logo;