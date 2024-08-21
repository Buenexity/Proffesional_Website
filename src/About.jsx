import Lists from "./components/skillscheck.jsx"; 
import "./About.css" 


function About() {
    const items = ["Embedded Systems", "Web Development", "Microcontrollers"]; 
    const items2 = ["Video Games" , "Traveling"]; 
    const items3 = ["HTML", "CSS" , "Java" , "C++" , "React", "Python" , "React"]; 
    const items4 = ["CS100", "EE030B" , "CS110" , "CS010C" ];


    return (
        <div className="container">
    
      <div className="About-Section">
    

        <div className="About-Me">
          <h1>About Me</h1>
          <p>
            Hello! I'm Rosend Marquez, a passionate Computer Engineering student at UC Riverside. 
            I have a passion for learning new things and dont shy away from tackling complex problems. 
            
          </p>
        </div>
         <div className="List-items">
        <Lists title="Interests" items={items} />
        <Lists title="Technical Proficiencies" items={items3} />
        </div>
        <h1><a href = ".\public\RosendoMarquez_Resume (3).pdf"><b>Resume Button</b></a></h1>
        
      </div>
      <div class="Image">
    </div>
      </div>
    );
}

export default About;
