import   '../App.css';
import   emcoImg from   "../assets/emco.jpeg";

const WorkExperience = () => {
  return (
    <section id="work-section">
      <h1 className='title-header'>Work Experience</h1>
      <hr />
      <div className="right_side">
        <p>Jan 2023 - Apr 2023</p>
        <br />
        <img id="emco" src= {emcoImg} alt="EMCO image" />
      </div>
      <div className="experience">
        <h2 id="work_title">IT Support Specialist Tier 1 Co-op</h2>
        <h4><i>EMCO Corporation, London, Ontario</i></h4>
        <br />
       
        <p>
          • Prioritized and provided resolution of support inquiries per the established support service levels to EMCO teammates all over Canada.
          <br />
        </p>
        <p>
          • Repaired computer hardware including laptops and desktops as well as triaging issues with office equipment such as printers, VOIP phones etc.
          <br />
        </p>
        <p>
          • Logged support inquiries and other inquiries through ticketing system called Ivanti with day-to-day monitoring, tracking, and coordinating of service desk incidents
          <br />
        </p>
        </div>
        <div className='recommendation-btn'>
        <button className="button">
          <a href="https://www.linkedin.com/in/sambhav-timalsina-9a9432211/details/recommendations/">Recommendations</a>
        </button>
        </div> 
        
    
    </section>
  );
};

export default WorkExperience;
