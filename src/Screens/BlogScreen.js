import { React, useEffect } from "react";
import Navbar from "../Components/Header/Header";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog"
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">Blog!</h1>
            <p className="py-6 text-lg">Currently, I have no blogs written. This is planned for documenting development on a game idea specifically</p>
            <a className="btn btn-primary text-lg" href="/projects">See My Projects</a>
          </div>
        </div>
      </div>

    </div>
  );
}




export default Blog;


