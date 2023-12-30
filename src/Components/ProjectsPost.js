import React from "react";
import Logo from "./Logo";
/* Props format for a short post
  title: title for the post
  image: the relative path to the images
  alt: the alt for the image
  description: a short description of the project
  link: the link the card should take you to on click
*/
const ProjectsPost = (props) => {
  console.log(props.icons)
  return (
    <div className="w-7/12">
      <div className="card lg:card-side bg-base-100 shadow-xl glass mb-8 w-full">
        <figure><img className="max-h-96 h-96" src={props.image} alt={props.alt} /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="max-w-96 lg:max-w-96 lg:text-m text-m">
            {props.description}
          </p>
          <div className="card-actions justify-between">
            <div className="self-center  flex flex-row">
              {props.icons.map((icon, key) => (
                <Logo key={key} icon={icon} />
              ))} 

            </div>
            <div className="">
              <a href={props.link} className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPost;