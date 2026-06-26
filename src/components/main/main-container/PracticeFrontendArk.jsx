import "../../../styles/main/main-container/PracticeFrontendArk.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBoltLightning,
  faTrophy,
  faStar,
  faFire,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const PracticeFrontendArk = () => {
  return (
    <div className="practice-wrapper">
      <div className="heading">
        <h1>Why practice on FrontendArk?</h1>
      </div>

      <div className="card">
        <div className="skill">
          <button disabled>
            <FontAwesomeIcon icon={faCode} />
          </button>
          <h4>Real Frontend Skills</h4>
          <h5>
            Focus on JavaScript utilities and React UI
            problems you actually use at work.
          </h5>
        </div>

        <div className="runner">
          <button disabled>
            <FontAwesomeIcon icon={faBoltLightning} />
          </button>
          <h4>In-Browser Runner</h4>
          <h5>
            Run tests instantly with zero setup.
            No context switching, faster feedback.
          </h5>
        </div>

        <div className="interview">
          <button disabled>
            <FontAwesomeIcon icon={faTrophy} />
          </button>
          <h4>Interview-Focused</h4>
          <h5>
            Sharpen fundamentals and patterns
            asked in modern frontend interviews.
          </h5>
        </div>

        <div className="dx">
          <button disabled>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <h4>Beautiful DX</h4>
          <h5>
            Modern UI, keyboard-friendly,
            responsive, and dark-mode native.
          </h5>
        </div>
      </div>

      <div className="tech">
        <div className="heading-tech">
          <h2>Technologies Covered</h2>
          <p>Practice questions tailored for modern frontend.</p>
        </div>

        <div className="lang">
          <div className="js">
            <FontAwesomeIcon icon={faFire} />
            <span>JavaScript</span>
          </div>

          <div className="react">
            <FontAwesomeIcon icon={faStar} />
            <span>React</span>
          </div>

          <div className="coming-soon">
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>More coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeFrontendArk;