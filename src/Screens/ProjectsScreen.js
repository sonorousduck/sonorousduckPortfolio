import { React, useEffect } from "react";
import "./../static/css/ProjectsScreen.css"
import ProjectsPost from "../Components/ProjectsPost";
import AudioPost from "../Components/AudioPost";
import Navbar from "../Components/Header";



const regularProjects = [
  {
    title: "Save Money, Get Charged: Facility-Tied Energy Management with Unknown and Unscheduled EV Charging",
    image: require("../static/images/PEMS.png"),
    alt: "Predictive EMS",
    description: "Paper that was accepted into IEEE International Conference on Intelligent Transportation Systems (ITSC) 2023 in \
    Bilbao, Spain. (Premier conference in Electric Vehicles). Paper can be found at this link \
    (This currently is being published by IEEE. Link will be updated). Learns to predict energy load at a facility and controls chargers \
    based on that charge",
    link: "https://github.com/DIRECTLab/Predictive-EMS",
    icons: ["Python", "PyTorch", "Javascript", "REST"]
  },
  {
    title: "Ebony",
    image: require("../static/images/Ebony_Example.png"),
    alt: "Ebony",
    description: "For my Master's thesis, I am working on an easily extensible Game Engine with support for easy Reinforcement Learning Algorithm integration",
    link: "https://github.com/sonorousduck/Ebony",
    icons: ["C++", "OpenGL", "PyTorch", "Python"]
  },
  {
    title: "Acoustic Stealth Navigation",
    image: require("../static/images/acoustic_stealth.png"),
    alt: "Acoustic Stealth Preview",
    description: "Developing an algorithm using ROS2 for determing routes of best acoustic masking for navigation",
    disabled: true,
    icons: ["Python", "PyTorch", "ROS2", "Unity"]
  },
  {
    title: "Human Trajectory Navigation",
    image: require("../static/images/Human_Trajectories.png"),
    alt: "Human Trajectory Example",
    description: "Developing algorithms to dynamically predict human trajectories and plan safe routes accomodating them",
    disabled: true,
    icons: ["Python", "PyTorch", "Gazebo", "ROS2"]
  },
  {
    title: "BirdClef 2022",
    image: require("../static/images/BirdClefResults.png"),
    alt: "BirdClef Results",
    description: "Project in graduate level Deep Learning Class. I built out several different ML structures for determining the call of endangered birds in Hawai'i\
    I created my own CNN models, then used transfer learning using models such as ResNet152, RegNet, VGG19 along with several different forms of \
    data augmentation, class imbalance mitigation, and so forth.",
    link: "https://github.com/sonorousduck/STAT6685_Final_Project",
    icons: ["Python", "PyTorch"]
  },
  {
    title: "RecolleX",
    image: require("../static/images/recollex_example.png"),
    alt: "RecolleX Example",
    description: "Developing a React Native Expo application for a client enabling users to track interactions with others and remember experiences they have had",
    disabled: true,
    icons: ["Javascript", "React Native", "Expo", "Firebase"]
  },
  {
    title: "HackUSU 2023",
    image: require("../static/images/HackUSU2023.png"),
    alt: "HackUSU2023",
    description: "Developed by me and two other people working on over 24 hours to build a JRPG in Unity. We ended up taking \
    second place among hundreds of competitors in the Game Development category. Used free Final Fantasy assets, not owned by us.",
    link: "https://github.com/Serpents-of-the-East/hackUSU-2023",
    icons: ["C#", "Unity"]
  },
  {
    title: "That Makes Sense",
    image: require("../static/images/that_makes_sense.png"),
    alt: "That Makes Sense",
    description: "I worked with Daniel Snow to develop about 20 out of the 30 puzzles featured in That Makes Sense. I also built \
    out a custom file format creator for the game to develop Hex-based maps for puzzle design. I can send a copy of the code \
    on a case by case basis, as it is a private repo. Feel free to reach out if you want to see the editor, as well as feel \
    free to get the game!",
    link: "https://store.steampowered.com/app/2166500/That_Makes_Sense/",
    icons: ["C++", "Javascript", "React", "NodeJS"]
  },
  {
    title: "That Makes Sense Map Editor",
    image: require("../static/images/mapEditor.png"),
    alt: "Map Editor",
    description: "A map editor that I created for the puzzle game, That Makes Sense. This enabled both Daniel Snow and myself to \
    quickly iterate on map ideas, along with exporting them into a file format that can be loaded into the game directly. We have plans to \
    add capability for users to create their own maps and try them out as well using this editor.",
    link: "https://github.com/Serpents-of-the-East/mgmr-editor",
    icons: ["Javascript", "Tailwind"]
  },
  {
    title: "HackUSU 2022",
    image: require("../static/images/HackUSU2022.png"),
    alt: "HackUSU2022",
    description: "Developed by me and two other people working over 24 hours to build a game inspired by games like Jetpack Joyride. \
    We developed a level that ended up being pretty difficult to beat, though fun. The premise of the game was the ability to flip\
    gravity and collect powerups to get new abilities. Much of the art was designed and drawn in the 24 hours as well by myself.",
    link: "https://github.com/Serpents-of-the-East/hack-usu",
    icons: ["c#", "Unity"]
  },
  {
    title: "Charging Reservation Application",
    image: require("../static/images/chargingReservationExample.png"),
    alt: "Charging Reservation",
    description: "I created a frontend and backend for a Mobile-Friendly web application that allows users to reserve chargers at the Electric Vehicle Roadway at ASPIRE. \
    This allows us to better plan for user behavior and load times at the facility, as well as begin to understand high usage times. This then lets us load balance our power \
    usage at the EVR much more efficiently.",
    icons: ["Javascript", "Tailwind", "DaisyUI", "PostgresDB", "NodeJS", "REST"],
    disabled: true
  },
  {
    title: "ASPIRE Visualization Website and Database",
    image: require("../static/images/visualizationWebsite.png"),
    alt: "ASPIRE data visulization",
    description: "I created a visualization website for a backend database (created in PostgresDB and Sequelize ORM) that I also created. \
    This visualization server hosts data for all of UTA bus systems, UTA and ASPIRE chargers across Salt Lake City and Ogden, and provides convenient \
    documentation using Postman for researchers to query data and reports to be generated.",
    icons: ["Python", "Javascript", "Sequelize", "Postgres", "REST", "NodeJS", "DaisyUI"],
    disabled: true
  },
  {
    title: "Hacking Challenge",
    image: require("../static/images/HackingChallenge.png"),
    alt: "Hacking Challenge",
    description: "There was a need to develop a Hacking Challenge while I was a TA for the Web Development class at \
      Utah State University. Starting in the Summer of 2021, I developed from scratch this hacking challenge in Django, Vue and \
      used Nginx to serve the website. I deployed it to Digital Ocean to host the server itself. Hosted at aggiectf.tk.",
    link: "https://github.com/sonorousduck/hacking_challenge",
    icons: ["Python", "Django", "Javascript", "Vue", "Digital Ocean", "REST"]
  },

  {
    title: "Portfolio Website",
    image: require("../static/images/PortfolioWebsite.png"),
    alt: "Portfolio Website Image",
    description: "This website is the portfolio website. Written in React and hosted using AWS",
    link: "https://github.com/sonorousduck/sonorousduckPortfolio",
    icons: ["Javascript", "React", "Tailwind", "DaisyUI", "AWS"]
  },
  {
    title: "Super Smash Bot and Server",
    image: require("../static/images/SuperSmash.png"),
    alt: "Super Smash Image",
    description: "A Reinforment Agent using Deep Reinforcement learning techniques was trained to beat a level one AI. \
      Additionally, a server was created to allow for async training as well to work with the emulator. \n\n \
      Used Tensorflow as the framework.",
    link: "https://github.com/sonorousduck/SuperSmashBot",
    icons: ["Python", "Tensorflow", "Django", "REST"]
  },
  {
    title: "Inigo Moncroya - Robot Vision and Navigation",
    image: require("../static/images/YahboomTank.png"),
    alt: "Image of Yahboom Tank",
    description: "A Robotics system that uses OpenCV to do object detection and a trained Tensorflow model to do human detection. \
      Used a Yahboom G1 Tank for the hardware.",
    link: "https://github.com/Max-Clark/inigo-moncrowya-cs5510",
    icons: ["Python", "Tensorflow", "ROS1", "OpenCV"]
  },
  {
    title: "Flappy Bird RL",
    image: require("../static/images/FlappyBird.png"),
    alt: "Flappy Bird Picture",
    description: "Simple Reinforcement Agent built to play and beat Flappy Bird. \
      Different methods were implemented such as Actor Critic, Deep RL learning, etc. (WIP)",
    link: "https://github.com/sonorousduck/FlappyBirdRL",
    icons: ["Python", "PyTorch"]
  },
];

const audioProjects = [
  {
    title: "AI Generated LoFi Music",
    audioSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1226751406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    description: "Using an LSTM, I created a simple AI to create LoFi music, based on a dataset that I found containing midi lofi music. Only plays piano right now, but I have plans to use transformers and create more instruments",
    link: "https://github.com/sonorousduck/MusicGenerator",
    icons: ["Python", "PyTorch"]
  }
]


const Projects = () => {
  useEffect(() => {
    document.title = "Projects"


  }, []);

  return (
    <div>
      <Navbar />
      <div className="center-children">
        <div className="mb-8">
          <h1 className="font-sans font-semibold text-5xl">Projects</h1>
        </div>
        {regularProjects.map((project, key) =>
          <ProjectsPost key={key} title={project.title} image={project.image} alt={project.alt} description={project.description} link={project.link} icons={project.icons} disabled={project.disabled} />
        )}
        {audioProjects.map((project, key) =>
          <AudioPost key={key} title={project.title} audioSrc={project.audioSrc} description={project.description} link={project.link} icons={project.icons} />
        )}

      </div>
    </div>
  );
}

export default Projects;