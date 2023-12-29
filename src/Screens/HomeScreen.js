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
    <div>
      <button class="btn btn-primary rounded-full">Button</button>

    </div>
  );
}




export default Home;


