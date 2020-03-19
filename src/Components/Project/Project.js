import React from "react";

const Project = props => {
  let list;
  if (props.skills) {
    list = props.skills.map((skill, index) => {
      if (props.skills.length - 1 > index) {
        return <span key={index}>{skill}, </span>;
      } else {
        return <span key={index}>{skill}</span>;
      }
    });
  }

  return (
    <div>
      <h5 className="project-title">{props.title}</h5>
      <p className="project-description">{props.blurb}</p>
      <div className="technologies">Built With: {list}</div>
      <a href={props.github} target="_blank">
        Github
      </a>{" "}
      <br></br>
      <a href={props.app} target="_blank">
        Site
      </a>
    </div>
  );
};

export default Project;
