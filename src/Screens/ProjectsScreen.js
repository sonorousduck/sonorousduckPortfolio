import { React, useEffect } from "react";
import { Typography } from "@mui/material";
import { Title } from "@mui/icons-material";
import "./../static/css/ProjectsScreen.css"
import ProjectsPost from "../Components/ProjectsPost";
import AudioPost from "../Components/AudioPost";
import Navbar from "../Components/Header/Header";
import Icon from '@mui/material/Icon';

const data = [
  {
    title: "Save Money, Get Charged: Facility-Tied Energy Management with Unknown and Unscheduled EV Charging",
    image: require("../static/images/PEMS.png"),
    alt: "Predictive EMS",
    description: "Paper that was accepted into IEEE International Conference on Intelligent Transportation Systems (ITSC) 2023 in \
    Bilbao, Spain. (Premier conference in Electric Vehicles). Paper can be found at this link \
    (This currently is waiting to be published by IEEE). Learns to predict energy load at a facility and controls chargers \
    based on that charge",
    link: "https://github.com/DIRECTLab/Predictive-EMS",
  },
  {
    title: "HackUSU 2023",
    image: require("../static/images/HackUSU2023.png"),
    alt: "HackUSU2023",
    description: "Developed by me and two other people working on over 24 hours to build a JRPG in Unity. We ended up taking \
    second place among hundreds of competitors in the Game Development category. Used free Final Fantasy assets, not owned by us.",
    link: "https://github.com/Serpents-of-the-East/hackUSU-2023",
  },
  {
    title: "That Makes Sense",
    image: require("../static/images/that_makes_sense.png"),
    alt: "That Makes Sense",
    description: "I worked with Daniel Snow to develop about 20 out of the 30 puzzles featured in That Makes Sense. I also built \
    out a custom file format creator for the game to develop Hex-based maps for puzzle design. I can send a copy of the code \
    on a case by case basis, as it is a private repo. Feel free to reach out if you want to see the editor, as well as feel \
    free to get the game!",
    link: "https://github.com/Serpents-of-the-East/mgmr-editor"
  },
  {
    title: "HackUSU 2022",
    image: require("../static/images/HackUSU2022.png"),
    alt: "HackUSU2022",
    description: "Developed by me and two other people working over 24 hours to build a game inspired by games like Jetpack Joyride. \
    We developed a level that ended up being pretty difficult to beat, though fun. The premise of the game was the ability to flip\
    gravity and collect powerups to get new abilities. Much of the art was designed and drawn in the 24 hours as well by myself.",
    link: "https://github.com/Serpents-of-the-East/hack-usu",
  },
  {
    title: "Hacking Challenge",
    image: require("../static/images/HackingChallenge.png"),
    alt: "Hacking Challenge",
    description: "There was a need to develop a Hacking Challenge while I was a TA for the Web Development class at \
      Utah State University. Starting in the Summer of 2021, I developed from scratch this hacking challenge in Django, Vue and \
      used Nginx to serve the website. I deployed it to Digital Ocean to host the server itself. Hosted at aggiectf.tk.",
    link: "https://github.com/sonorousduck/hacking_challenge",
  },

  {
    title: "Portfolio Website",
    image: require("../static/images/PortfolioWebsite.png"),
    alt: "Portfolio Website Image",
    description: "This website is the portfolio website. Written in React and hosted using AWS",
    link: "https://github.com/sonorousduck/sonorousduckPortfolio",
  },

  {
    title: "Super Smash Bot and Server",
    image: require("../static/images/SuperSmash.png"),
    alt: "Super Smash Image",
    description: "A Reinforment Agent using Deep Reinforcement learning techniques was trained to beat a level one AI. \
      Additionally, a server was created to allow for async training as well to work with the emulator. \
      Used Tensorflow as the framework.",
    link: "https://github.com/sonorousduck/SuperSmashBot",
  },
  // {
  //   title: "Music Generator",
  //   // image: require("../static/images/mazegame.jpg"),
  //   alt: "Music Generator",
  //   description: "An AI trained to learn on music and output music that sounds similar. \
  //   An included example of the song is included above. Used Tensorflow as the framework",
  //   link: "https://github.com/sonorousduck/MusicGenerator",
  // },
  {
    title: "Inigo Moncroya - Robot Vision and Navigation",
    image: require("../static/images/YahboomTank.png"),
    alt: "Image of Yahboom Tank",
    description: "A Robotics system that uses OpenCV to do object detection and a trained Tensorflow model to do human detection. \
      Used a Yahboom G1 Tank for the hardware.",
    link: "https://github.com/Max-Clark/inigo-moncrowya-cs5510",
  },
  {
    title: "Flappy Bird RL",
    image: require("../static/images/FlappyBird.png"),
    alt: "Flappy Bird Picture",
    description: "Simple Reinforcement Agent built to play and beat Flappy Bird. \
      Different methods were implemented such as Actor Critic, Deep RL learning, etc. (WIP)",
    link: "https://github.com/sonorousduck/FlappyBirdRL",
  },
  // {
  //   title: "",
  //   // image: require("../static/images/mazegame.jpg"),
  //   alt: "",
  //   description: "",
  //   link: "",
  // },
];


const Projects = () => {
  useEffect(() => {
    document.title = "Projects"
  }, []);

  let test = require("../static/images/SuperSmash.png");

  return (
    <div>
      <Navbar />
      <div className="center-children">
        <div className="mb-8">
          <h1 className="font-sans font-semibold text-5xl">Projects</h1>
        </div>
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl glass">
            <figure><img className="lg:w-152 h-96" src={test} alt="Game" /></figure>
            <div className="card-body">
              <h2 className="card-title">Super Smash Bot and Server</h2>
              <p className="max-w-96">A Reinforment Agent using Deep Reinforcement learning techniques was trained to beat a level one AI.
                Additionally, a server was created to allow for async training as well to work with the emulator. 
                Used Tensorflow as the framework.
                
                
                </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More</button>
              </div>
            </div>
          </div>
          <Icon baseClassName="fas" className="fa-plus-circle" style={{fontSize: 128}} />

        </div>


      </div>
    </div>
  );
}

export default Projects;