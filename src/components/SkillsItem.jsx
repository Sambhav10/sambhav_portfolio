
import   '../App.css';
function SkillItem({ skill }) {
    return (
      <li>
        <p style={{textAlign:'left'}}>{skill}</p>
        <span className="bar"><span className={skill.toLowerCase()}></span></span>
      </li>
    );
  }

  
  export default SkillItem;
