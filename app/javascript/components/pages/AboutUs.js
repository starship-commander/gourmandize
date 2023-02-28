import React from "react";
import chopsticks from '../assets/chopsticks.png'
import spoon from '../assets/spoon.png'
import knife from '../assets/knife.png'
import spork from '../assets/spork.png'

const AboutUs = () => {
  return(
    <>
      <main style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'5rem'}}>
        <h3 style={{textAlign:'center'}}> Meet the team!</h3>
        <div style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:'center'}}>
          <div className="circle" 
            style={{
              height:'275px',
              width:'275px',
              borderRadius:'50%',
              backgroundImage:`url(${spork})`,
              backgroundPosition:'center',
              backgroundSize:'contain'
            }}
          >

          </div>
          <div className="about-description" style={{width:'600px', height:'fit-content'}}>
          <span style={{color:'#00f8b2', fontWeight:'bold'}}>Project Manager.</span>
          <br />
          Hello, I'm Ney Vencer IV. As the Project Manager for team Starship-Commander I ensured the team was on their assigned card while they were working, gave updates to the class upon standup, facilitated communication between the team while working on separate cards, and created/updated our Trello board to reflect what we were working on.
          </div>
        </div>
        <br />

        <div style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'600px'}} className="about-description" >
          <span style={{color:'#00f8b2', fontWeight:'bold'}}>Product Manager.</span>
          <br />
          Hello, my name is Sammy! My role in the team was product manager. In that role, I was responsible for keeping the team on task and ensuring the product met all requirements. I supported the team with any technical questions they may have and tried to remove any barriers or blockers that may have impeded the successful launch of the application.
          </div>
          <div style={{
              height:'275px',
              width:'275px',
              borderRadius:'50%',
              backgroundImage:`url(${knife})`,
              backgroundPosition:'center',
              backgroundSize:'contain'
            }}
            className="circle"
          >

          </div>
        </div>
        <br />

        <div style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:'center'}}>
          <div 
            style={{
              height:'275px',
              width:'275px',
              borderRadius:'50%',
              backgroundImage:`url(${spoon})`,
              backgroundPosition:'center',
              backgroundSize:'contain'
            }}
            className="circle"
          >

          </div>
          <div style={{width: '600px'}} className="about-description" >
          <span style={{color:'#00f8b2', fontWeight:'bold'}}>Tech Lead.</span>
          <br />
          Hello, my name is Octavio (pronounced oak-tah-vee-o)! As the technical lead in this project, I monitored technical operations and made sure they ran smoothly. I also lead mentorship sessions for the team as well as surfaced and helped tackle blockers to aid in setting goals for the day.
          </div>
        </div>
        <br />

        <div style={{display:'flex', gap:'30px', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'600px'}} className="about-description" >
          <span style={{color:'#00f8b2', fontWeight:'bold'}}>Design Lead.</span>
          <br />
          Hi, I'm Chris! As design lead I made the layouts of the pages, picked the colors, and added in the styling for the Gourmandize app. I am also in charge of the user experience, making sure the interactions between user and application are functional and all the pages are displaying what we intend them to and navigation between pages is smooth and intuitive.
          </div>
          <div style={{
              height:'275px',
              width:'275px',
              borderRadius:'50%',
              backgroundImage:`url(${chopsticks})`,
              backgroundPosition:'center',
              backgroundSize:'contain'
            }}
            className="circle"
          >

          </div>
        </div>
      </main>
    </>
  )
}

export default AboutUs