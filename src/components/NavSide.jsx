import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faBriefcase, faComment } from '@fortawesome/free-solid-svg-icons';


function NavSide() {


  return (
    <aside id="aside">
      <div id="logo">
        <a href="index.html"><span>S</span>ambhav</a>
      </div>
      <nav>
      <ul>
        <li><FontAwesomeIcon icon={faHome} /> Home</li>
        <li><FontAwesomeIcon icon={faList} /> Portfolio</li>
        <li><FontAwesomeIcon icon={faBriefcase} /> Work Experience</li>
        <li><FontAwesomeIcon icon={faComment} /> Contact</li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavSide;
