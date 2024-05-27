import "./projects.css"; 
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Pacman from "/public/Pacman.jsx";

function Projects(props) {
  const isPacman = props.Title.toLowerCase() === "PacMan Clone";
  return (
    <div className="project-container">
      <div className="text-container">
        <h2>{props.Title}</h2>
        <p>{props.Description}</p>
      </div>
      <div className="image-container">
        {isPacman ? 
        (
          <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
              <Pacman />
            </Suspense>
          </Canvas>
        ) : 
        (
          <img src={props.Image} alt={props.Title} />
        )}
      </div>
    </div>
  );
}

export default Projects;
