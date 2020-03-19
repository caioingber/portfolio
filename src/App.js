import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import ProjectContainer from "./Components/ProjectContainer/ProjectContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
