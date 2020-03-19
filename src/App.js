import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
