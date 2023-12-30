import React from "react";
import Logo from "./Logo";

/* Props format for a short post
  title: title for the post
  description: a short description of the project
  link: the link the card should take you to on click
*/
const AudioPost = (props) => {

  return (
    <div className="w-7/12">
      <div className="card lg:card-side bg-base-100 shadow-xl glass mb-8">
        <figure>
          <iframe title={props.title} width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={props.audioSrc}></iframe>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="max-w-96 lg:max-w-96 text-m">
            {props.description}
          </p>
          <div className="card-actions justify-between">
            <div className="self-center flex flex-row">
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

export default AudioPost;