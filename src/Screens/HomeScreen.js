import { Typography } from "@mui/material";
import { React, useEffect } from "react";
import ProjectsPost from "../Components/ProjectsPost";
import '../static/css/HomeScreenCSS.css'
import ShortPost from "../Components/Post";

const Home = () => {
  useEffect(() => {
    document.title = "Ryan Anderson"
  }, []);

  return (
    <div className="centerChildren">
      <Typography variant="h1" marginTop={4}>
        Welcome!
      </Typography>
      <Typography marginBottom={4}>
        My current projects are below! Check out my projects page for more, or go straight to my GitHub!
      </Typography>
      <div className="centerChildren">
        <div className="flex-format">
          <ProjectsPost title="Acoustic Stealth Navigation" image={require("../static/images/acoustic_stealth.png")} alt="Acoustic Stealth Preview"
          description="Developing an algorithm using ROS2 for determing routes of best acoustic masking for navigation" margin={8}/>

          <ProjectsPost title="Ebony"  
          image={require("../static/images/Ebony_Example.png")} alt="Ebony"
          description="For my Master's thesis, I am working on an easily extensible Game Engine with support for easy Reinforcement Learning Algorithm integration"
          margin={8} 
          link="https://github.com/sonorousduck/Ebony"
          
          />

          <ProjectsPost title="Human Trajectory Navigation" 
          image={require("../static/images/Human_Trajectories.png")} alt="Human Trajectory Example"
          description="Developing algorithms to dynamically predict human trajectories and plan safe routes accomodating them"
          margin={8} />

          <ProjectsPost title="RecolleX"  
          image={require("../static/images/recollex.png")} alt="RecolleX Example"
          description="Developing a React Native Expo application for a client enabling users to track interactions with others and remember experiences they have had"
          margin={8} />



            {/* <ProjectsPost title="Coop Habit Tracker" image={require('../static/images/CoopHabitScreen.png')} alt="Coop Habit Screen Preview"
            description="Currently working on a habit creation and tracking app, that you can invite others to join in with you"
            link="https://github.com/sonorousduck/CoopHabitTracker" margin={8}/>
            <ProjectsPost title="Calorie Tracking App" image={require('../static/images/CalorieTracker.png')} alt="Calorie Tracking Screen Preview"
            description="Currently working on an app that allows you to track calories, weights and the trends associated with them over time"
            link="https://github.com/Serpents-of-the-East/CalorieTracker" margin={8}/> */}
          </div>

      </div>
    </div>
  );
}




export default Home;


