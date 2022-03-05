import { Typography } from "@mui/material";
import { React, useEffect } from "react";
import ProjectsPost from "../Components/ProjectsPost";
import '../static/css/HomeScreenCSS.css'

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
            <ProjectsPost title="Coop Habit Tracker" image={require('../static/images/CoopHabitScreen.png')} alt="Coop Habit Screen Preview"
            description="Currently working on a habit creation and tracking app, that you can invite others to join in with you"
            link="https://github.com/sonorousduck/CoopHabitTracker" margin={8}/>
            <ProjectsPost title="Calorie Tracking App" image={require('../static/images/CalorieTracker.png')} alt="Calorie Tracking Screen Preview"
            description="Currently working on an app that allows you to track calories, weights and the trends associated with them over time"
            link="https://github.com/Serpents-of-the-East/CalorieTracker" margin={8}/>
          </div>

      </div>
    </div>
  );
}




export default Home;


