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

        <div className="flex-format">
            <ProjectsPost title="Coop Habit Tracker" image={require('../static/images/CoopHabitScreen.png')} alt="Coop Habit Screen Preview"
            description="Currently working on a habit creation and tracking app, that you can invite others to join in with you"
            link="https://github.com/sonorousduck/CoopHabitTracker" />
            <ProjectsPost title="Coop Habit Tracker" image={require('../static/images/CoopHabitScreen.png')} alt="Coop Habit Screen Preview"
            description="Currently working on a habit creation and tracking app, that you can invite others to join in with you"
            link="https://github.com/sonorousduck/CoopHabitTracker" />
        </div>
    </div>
  );
}




export default Home;


