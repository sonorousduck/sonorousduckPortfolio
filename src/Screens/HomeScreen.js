import { Typography } from "@mui/material";
import React from "react";
import ShortPost from "../Components/Post";
import '../static/css/HomeScreenCSS.css'

const Home = () => {
  return (
    <div className="centerChildren">
      <Typography variant="h1" marginTop={4}>
        Welcome!
      </Typography>
      <Typography marginBottom={4}>
        My most recent project is below! Check out my project archive for more, or go straight to my GitHub!
      </Typography>
      {/* <div className="mainPost center-children"> */}
        <ShortPost title="Coop Habit Tracker" image={require('../static/images/CoopHabitScreen.png')} alt="Coop Habit Screen Preview"
        description="Currently working on a habit creation and tracking app, that you can invite others to join in with you"
        link="https://github.com/sonorousduck/CoopHabitTracker" />
      {/* </div> */}
      {/* <ShortPost title='Water Tracker' image={require('../static/images/watertracker.jpg')} alt='image of app' 
      description='A React Native project that I created to track daily water intake.' 
      link="https://github.com/tganderson0/water-tracker"
      /> */}
    </div>
  );
}




export default Home;


