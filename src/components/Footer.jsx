import   '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faInstagram, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer() {
  return (
    <>
    <footer className="main-footer">
      <div className="social-media-icons">
        <li>
          <h2>SOCIALS</h2>
          <br></br>
          
          <a href="https://www.linkedin.com/in/sambhav-timalsina-9a9432211/"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.instagram.com/sambhav_timalsina/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.facebook.com/sambhav.timalsinalfc10/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://github.com/Sambhav10"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://twitter.com/sambhavtimalsi3"><FontAwesomeIcon icon={faTwitter} /></a>

        </li>
        <p>Phone:<a href="tel:">(+1) 226-504-7410</a></p>
        <p>Email:<a href="mailto:sambhav.timalsina@gmail.com"> sambhav.timalsina@gmail.com</a></p>
      </div>
      
      <div className="main-footer-text">
        <h4 className="main-footer-heading ">Reach Out to Me!</h4>
        <p className="main-footer-short-heading">Discuss a project or Just wanna say hi? My Inbox is open for all</p>
        <p className="main-footer-short-desc">
          Open for Opportunities: YES
        </p>
      </div>
      <div className="main-footer-lower">
        &copy; Copyright 2023. Made by
        <b><i>Sambhav Timalsina</i></b>
      </div>
    </footer>
    </>
  );
}

export default Footer;
