import { React, useEffect } from "react";
import Navbar from "../Components/Header/Header";

const Home = () => {
  useEffect(() => {
    document.title = "Ryan Anderson"
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p className="py-6">I am Ryan Anderson, a current Master's student specializing in Robotics, 
            machine learning, and software development graduating in Spring 2024. 
            I have a strong foundation in various programming languages including C++, Python, C#, and Javascript. 
            When I am not working, I love to stay fit, draw, read, play video games and work on game development. </p>
            <a className="btn btn-primary" href="/projects">See My Projects</a>
          </div>
        </div>
      </div>

    </div>
  );
}




export default Home;


