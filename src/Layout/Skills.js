import * as React from 'react'
import content from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faComments,
  faGraduationCap,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faGit,
  faGithub,
  faSass,
  faJira,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
export const Skills = props => {
  const {
    soft_skills,
    skill_team,
    skill_communication,
    skill_ambitious,
    skill_learn,
    hard_skills,
    html,
    CSS,
    react,
    javascript,
    git,
    github,
    jira,
    sass,
    npm,
    hover,
    additionalInfoTwo
  } = props.content;

  return (
    <div className="skills">
      <h4 className="skillsHeader"> {soft_skills} </h4>
      <p className="descriptionNone"> {hover}</p>
      <div className="skillset">
        <FontAwesomeIcon className="icon" icon={faUsers} size="3x" />
        <span className="description"> {skill_team}</span>
        <FontAwesomeIcon className="icon" icon={faComments} size="3x" />
        <span className="description"> {skill_communication}</span>
        <FontAwesomeIcon className="icon" icon={faGraduationCap} size="3x" />
        <span className="description"> {skill_ambitious}</span>
        <FontAwesomeIcon
          className="icon"
          icon={faChalkboardTeacher}
          size="2x"
        />
        <span className="description"> {skill_learn}</span>
      </div>
      <h4 className="skillsHeader"> {hard_skills}</h4>
      <div className="skillset">
        <FontAwesomeIcon className="icon" icon={faHtml5} size="3x" />
        <span className="description"> {html}</span>
        <FontAwesomeIcon className="icon" icon={faCss3} size="3x" />
        <span className="description"> {CSS}</span>
        <FontAwesomeIcon className="icon" icon={faJsSquare} size="3x" />
        <span className="description"> {javascript}</span>
        <FontAwesomeIcon className="icon" icon={faReact} size="3x" />
        <span className="description"> {react}</span>
        <FontAwesomeIcon className="icon" icon={faSass} size="3x" />
        <span className="description"> {sass}</span>
        <FontAwesomeIcon className="icon" icon={faGithub} size="3x" />
        <span className="description"> {github}</span>
        <FontAwesomeIcon className="icon" icon={faGit} size="3x" />
        <span className="description"> {git}</span>
        <FontAwesomeIcon className="icon" icon={faJira} size="3x" />
        <span className="description"> {jira}</span>
        <FontAwesomeIcon className="icon" icon={faNpm} size="3x" />
        <span className="description"> {npm}</span>
      </div>
      <h4>Dodatkowo:</h4>
      <span> Potrafię pracować w metodologii<strong>SCRUM,</strong> znam framework do testowania E2E <strong>Cypress.io.</strong>  Korzystam z<strong> Visual Studio Code.</strong></span>
    <h5>{additionalInfoTwo}</h5>
    </div>
  );
};
Skills.propTypes = {
      soft_skills: PropTypes.string,
    skill_team:PropTypes.string,
    skill_communication: PropTypes.string,
    skill_ambitious: PropTypes.string,
    skill_learn: PropTypes.string,
    hard_skills: PropTypes.string,
    html: PropTypes.string,
    CSS: PropTypes.string,
    react: PropTypes.string,
    javascript: PropTypes.string,
    git: PropTypes.string,
    github: PropTypes.string,
    jira: PropTypes.string,
    sass: PropTypes.string,
    npm:PropTypes.string,
    hove: PropTypes.string,
}
export default Skills;
