import React from 'react';
import NavBar from "./navbar";
import Hero from "./Hero";
import About from "./About";
import InfoBlock from "./components/info-block";
import Projects from "./components/projects";
import ShowCase from "./components/showcase";
import Job from "./components/job-showcase";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Pacman from "../public/Pacman"; 
import "./App.css";

// Import images for components
import gradImage from "../public/grad.jpg";
import ucrImage from "../public/ucr.png";
import mvcImage from "../public/mvc.jpg";
import discordBotImage from "../public/images (1).jpg";
import pacManCloneImage from "../public/pac.jpg";
import arduinoDustSensorImage from "../public/ard.jpg";
import pcBuildingImage from "../public/pc-building.jpg";
import volunteerWorkImage from "../public/volunteer.webp";
import iceSkatingImage from "../public/ice_skate.jpg";
import linkedInImage from "../public/linkedln.png";
import gitHubImage from "../public/github.jpg";
import UCRWORK from "../public/re.webp"

function App() {

  const scrollToSection = (locateId) => {
    const section = document.getElementById(locateId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <NavBar scrollToSection={scrollToSection} />
      <div id="home" className="content" style={{
        backgroundImage: `url(${gradImage})`, 
      }}>
        <Hero />
      </div>

      <div id="about" className="main-content">
        <About />
        <div className="Education">
          <h1>Education</h1>
          <InfoBlock
            Role={"Computer Science (3.85)"}
            Title={"University of California, Riverside "}
            Position={"2023-2025"}
            Image={ucrImage}
          />
          <InfoBlock
            Role={"Computer Engineering (3.90)"}
            Title={"Moreno Valley College "}
            Position={"2021-2023"}
            Image={mvcImage}
          />
        </div>
      </div>

      <div id="projects" className="Experience">
        <h1>Projects</h1>
      </div>

      <div className="project-experience">
        <Projects
          Image={discordBotImage}
          Title={"Discord Birthday Bot"}
          Description={
            "Java-based Discord bot that handles user birthday registrations and notifications. Utilized Hashmaps for efficient data storage and authorization. Leveraged the Discord API to enable users to register their birthdays and receive automated greetings. Implemented file handling for data persistence, ensuring user birthday information is stored and retrievable."
          }
        />
        
        <Projects
          Image={pacManCloneImage}
          Title={"PacMan Clone"}
          Description={
            "Pacman game with a graphical user interface using the SFML library, covering game mechanics, graphics, and user interaction, and included custom visuals and sound effects for a unique touch."
          }
        />
        <Projects
          Image={arduinoDustSensorImage}
          Title={"Arduino Dust Sensor"}
          Description={
            "Straightforward air quality monitoring tool by assembling an Arduino kit with a dust sensor, allowing the device to measure airborne dust levels. Additionally, I equipped it with three LED lights to indicate different air quality levels."
          }
        />
      </div>
      
      {/*To-DO*/}

      <div className="Real-Experience">
    <h1>Job Experience</h1>
    <Job 
    Title={"Research Intern"}
    Date={"June 2023 - Sept 2023"}
    Description={
        <ul>
            <li>Contributed to laboratory experiments focused on studying the combustibility of magnesium by creating and analyzing magnesium hydride nanoparticles for use in energetic applications.</li>
            <li>Created Python scripts to automate data analysis, handling scientific data related to XRD data.</li>
        </ul>
    }
    image={UCRWORK}
/>

</div>





      <div id="extracurriculars">
        <h1>Extracurriculars</h1>
      </div>
      <div className="Extra-C">
        <ShowCase title={"PC Building"} image={pcBuildingImage} />
        <ShowCase title={"Volunteer Work"} image={volunteerWorkImage} />
        <ShowCase title={"Ice Skating"} image={iceSkatingImage} />
      </div>

      <footer className="Footer-Content">
        <a
          href="https://github.com/Buenexity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInImage} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Buenexity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubImage} alt="GitHub" />
        </a>
      </footer>
    </div>
  );
}

export default App;
