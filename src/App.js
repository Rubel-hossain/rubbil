import React from 'react';
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroArea from "./components/HeroArea";
import Services from "./components/Services"


function App() {
  return (
    <div className="App">
        <HeroArea/>
        <Services/>
    </div>
  );
}

export default App;
