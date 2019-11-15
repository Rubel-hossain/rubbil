import React from 'react';
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroArea from "./components/HeroArea";
import Services from "./components/Services";
import Technology from "./components/Technology";
import ProjectsCountdown from "./components/ProjectsCountdown";

function App() {
  return (
    <div className="App">
        <HeroArea/>
        <Services/>
        <Technology/>
        <ProjectsCountdown/>
    </div>
  );
}

export default App;
