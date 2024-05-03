import '../App.css';

const PortfolioCard = ({ imgSrc, title, description, Link }) => {
    return (
        <div className="project-card">
        <img className="project-logo" src={imgSrc} alt={title} />
        <h2 style={{fontWeight:"bold"}}>{title}</h2>
        <p>{description}</p>
        <button className="button" style={{padding: '2%'}}>
          <a href={Link}>Have a look</a>
        </button>
      </div>
    );
  };

  export default PortfolioCard