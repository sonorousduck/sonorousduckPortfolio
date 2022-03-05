import {React, useEffect} from "react";
import { Typography } from "@mui/material";
import { Title } from "@mui/icons-material";
import "./../static/css/ProjectsScreen.css"
import ProjectsPost from "../Components/ProjectsPost";
import AudioPost from "../Components/AudioPost";

const data = [
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

  return (
    <div>
      <div className="center-children">

        <Typography variant="h1" marginTop={4}>
          Previous Projects
        </Typography>
        <Typography marginBottom={4}>
          My most recent project is below! Check out my project archive for more, or go straight to my GitHub!
        </Typography>
        </div>

        <div className="flex-format">
          {data.map(project => 
              <ProjectsPost title={project.title} image={project.image} alt={project.alt} description={project.description} link={project.link} margin={8}/> 
            )}
          <AudioPost margin={8} />
        </div>
      </div>
  );
}

export default Projects;