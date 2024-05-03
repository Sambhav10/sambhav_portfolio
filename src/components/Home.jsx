import   '../App.css';
import  fanshaweLogo from   "../assets/fanshawe-logo.png";
import highSchool from   "../assets/highschool.png"



function Home() {


  return (
    <main id='main'>
     <section  id="home-section">
     <div className="container">
        <div id="home-info">
            <h1>Hi there! I am <span className='custom-span'><strong>Sambhav Timalsina.</strong></span></h1>
            <br></br>
          <p>A passionate programmer with a curious mind who enjoys solving a complex
            and challenging real-world problems and wants to become a<span className='custom-span'> <b>Software Developer.</b></span></p>
           
           
          <button className="button"><a href="https://drive.google.com/file/d/1smH2SS_Us_mx9MoAry6QL5ZN4RkFfmIy/view?usp=sharing">See My Resume</a></button>
               </div>
            </div>
     </section>

     <section id="about-section">
      <h1 className='title-header'>About Me</h1>
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
     
      {/* Skills Section */}
      </section>
   

     </main>
    
  );

}

export default Home;
