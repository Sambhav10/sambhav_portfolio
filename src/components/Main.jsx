import   '../App.css';
import  fanshaweLogo from   "../assets/fanshawe-logo.png";
import highSchool from   "../assets/highschool.png"

import SkillItem from './SkillsItem';

function Main() {


  return (
    <main id='main'>
     <section  id="home-section">
     <div className="container">
        <div id="home-info">
            <h1>Hi there! I am <span className='custom-span'><strong>Sambhav Timalsina.</strong></span></h1>
            <br></br>
          <p>A passionate programmer with a curious mind who enjoys solving a complex
            and challenging real-world problems and wants to become a<span className='custom-span'> <b>Software Developer.</b></span></p>
            <button id="contactbtn"><a href="contact.html">Contact Me</a></button>
           
          <button id="contactbtn"><a href="https://drive.google.com/file/d/1smH2SS_Us_mx9MoAry6QL5ZN4RkFfmIy/view?usp=sharing">See My Resume</a></button>
       
               </div>
            </div>
     </section>

     <section id="about-section">
      <h1>About Me</h1>
      <hr />
      <div className="aboutme">
        <p id="abouttext">Hi there, My name is Sambhav Timalsina and I was born
          in kathmandu, Nepal situated in the laps of himalayas in South Asia.
          But currently I am in London, Ontario currently studying computer programming and
          Analysis to become a software Developer.
          <br></br>
          Since my childhood, I was aways fasinated by computer and was very curious
          to know more. Later on, I was more attracted by it's software rather than it's
          hardware. From there on I made up my mind to become a software developer and came to
          Canada to get better experience and opportunites. I have basic knowledge about
          programming languages and has aquire some skills which has build a good base for
          upcoming journey as a programming student.
        </p>
      </div>
      <div id="college">
        <h1>Education</h1>
        <hr />
        <img id="fanshawe-logo" src={fanshaweLogo} alt="Fanshawe logo" />
        <h2>Fanshawe College</h2>
        <p>Advanced Diploma, Computer Programming And Analysis</p>
        <p>Jan 2022 - Dec 2024
        </p>
        <p>GPA- 3.89/4.2</p>
      </div>

      <div id="highschool">
        <img id="highschool-logo" src={highSchool} alt="Little Angel's College"/>
        <h2>Little Angel's College</h2>
        <p>High School Diploma,Science </p>
        <p>July 2018 - April 2020
        </p>
        <p>GPA- 3.65/4.0</p>
      </div>

      {/* Skills Section */}

      <div id="myskills">
      <h1>Skills</h1>
      <hr />
      <div id="left-skills">
        <SkillItem skill="React" />
        <SkillItem skill="Java" />
        <SkillItem skill="SQL" />
      </div>
      <div id="right-skills">
        <SkillItem skill="HTML" />
        <SkillItem skill="CSS" />
        <SkillItem skill="JavaScript" />
      </div>
    </div>
      </section>
   

     </main>
    
  );

}

export default Main;
