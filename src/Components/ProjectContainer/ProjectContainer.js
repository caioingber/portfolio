import React from "react";
import "./ProjectContainer.css";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import Project from "../Project/Project";

const ProjectContainer = props => {
  return (
    <div className="project-container">
      <h3>Projects</h3>
      <Project
        title="Black Light Aquarium"
        github="https://github.com/caioingber/website-mockup/"
        app="https://caioingber.github.io/website-mockup/index.html"
        skills={["HTML", "CSS"]}
      />
      <Project title="BBC News Modal" skills={["HTML", "CSS", "JS", "AJAX"]} />
      <Project title="Simon.js" skills={["HTML", "CSS", "JS"]} />
      <Project
        title="Component Library"
        skills={["React", "CSS", "Storybook"]}
      />
      <Project
        title="Ecological Report Card"
        skills={["React", "Express", "MongoDB", "Node"]}
      />
      <Project
        title="Recipe Rolodex"
        skills={["React", "Express", "MongoDB", "Node"]}
      />
    </div>
  );
};

export default ProjectContainer;
