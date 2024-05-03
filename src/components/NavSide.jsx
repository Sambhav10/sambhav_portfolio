import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faBriefcase, faComment ,faComputer} from '@fortawesome/free-solid-svg-icons';

function NavSide() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside id="aside">
      <div id="logo">
        <a href="#home"><span>S</span>ambhav</a>
      </div>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('home-section')}><FontAwesomeIcon icon={faHome} /> Home</li>
          <li onClick={() => scrollToSection('portfolio-section')}><FontAwesomeIcon icon={faList} /> Portfolio</li>
          <li onClick={() => scrollToSection('skills-section')}><FontAwesomeIcon icon={faComputer} /> Skills</li>
          <li onClick={() => scrollToSection('work-section')}><FontAwesomeIcon icon={faBriefcase} /> Work Experience</li>
          <li onClick={() => scrollToSection('contact-section')}><FontAwesomeIcon icon={faComment} /> Contact</li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavSide;
