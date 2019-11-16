import React from 'react';
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroArea from "./components/HeroArea";
import Services from "./components/Services";
import Technology from "./components/Technology";
import ProjectsCountdown from "./components/ProjectsCountdown";
import RecentProjects from "./components/RecentProjects";
import OurCourses from "./components/OurCourses";
import VideoArea from "./components/VideoArea";

function App() {
  return (
    <div className="App">
        <HeroArea/>
        <Services/>
        <Technology/>
        <ProjectsCountdown/>
        <RecentProjects/>
        <OurCourses/>
        <VideoArea/>
    </div>
  );
}

export default App;
