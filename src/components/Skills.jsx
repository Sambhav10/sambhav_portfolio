import SkillItem from './SkillsItem';

export default function Skills () {


    return (
        <section  id = "skills-section">
        <div id="myskills">
        <h1 > Skills</h1>
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
    )
}