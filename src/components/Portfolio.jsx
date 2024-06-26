import   '../App.css';
import PortfolioCard from './PortfolioCard';
import   algoImg from   "../assets/algo.png";
import  tindogImg from    "../assets/tindog.png";
import  weatherImg from  "../assets/weather.png"


const Portfolio = () => {
  
    return (
        <section id="portfolio-section">
          <h1 className='title-header'>Portfolio</h1>
          <hr/>
         
    
          <div className="projects">
            <PortfolioCard
              imgSrc={algoImg}
              title="Algorithm Visualizer"
              description="It is a project written in HTML, CSS and JavaScript which visualizes how an sorting algorithm works. HTML and CSS are used to design the website and JavaScript is used to write all five algorithms that are used to sort the random array generated by the user."
              Link="https://github.com/Sambhav10/Algorithm-Visualizer"
            />
            <PortfolioCard
              imgSrc={weatherImg}
              title="Weather App"
              description="It is a simple basic website which fetches the data from the weather API and uses the data to show the weather of the city based on the user's search. Based on the typed city in the search bar, the image gets displayed in the background loaded from the Unsplash, a website to get stock pictures."
              Link="https://github.com/Sambhav10/check-weather"
            />
            <PortfolioCard
              imgSrc={tindogImg}
              title="tindog"
              description="It is a basic HTML/CSS-based website which is a replica of Tinder for dogs. It also uses the Bootstrap 4 framework for getting different tables, nav bars as well as footers but only uses CSS3 properties."
              Link="https://github.com/Sambhav10/tindog"
            />
          </div>
        </section>
      );
};

export default Portfolio;
