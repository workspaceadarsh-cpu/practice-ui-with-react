import '../../../styles/main/main-container/HowItWorks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faHandHoldingHeart, faRocket, faStar } from '@fortawesome/free-solid-svg-icons'

const HowItWorks = () => {
  return (
    <div>
      <div className="works-main">
        <div className="heading">
          <h1>How it works</h1>
        </div>
        <div className="work">
          <div className="inner-work">
            <div className="problem">
              <h2>01</h2>
              <h3>Pick a Problem</h3>
              <h5>Choose JavaScript utilities or React UI problems by difficulty & category.</h5>
            </div>
            <div className="preview">
              <h2>02</h2>
              <h3>Code & preview</h3>
              <h5>Use the Monaco editor and live preview (React) to iterate quickly.</h5>
            </div>
            <div className="run">
              <h2>03</h2>
              <h3>Run tests</h3>
              <h5>Validate with our built-in test runner and get instant feedback.</h5>
            </div>
          </div>
          <div className="btn">
            <button>
              <FontAwesomeIcon icon={faRocket} style={{ color: 'rgb(79,219,237)', }} />
              <h2>Start Practicing </h2>
              <span>free</span>
            </button>
          </div>
          <div className="grantee">
            <div className="grant">
              <FontAwesomeIcon icon={faShield} style={{ color: 'rgb(79,219,237)', }} />
              <h3>Trusted by aspiring frontend engineers</h3>
            </div>
            <div className="grant">
              <FontAwesomeIcon icon={faHandHoldingHeart} style={{ color: 'rgb(79,219,237)', }} />
              <h3>Trusted by aspiring frontend engineers</h3>
            </div>
            <div className="grant">
              <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(79,219,237)', }} />
              <h3>Trusted by aspiring frontend engineers</h3>
            </div>
            <div className="grant">
              <FontAwesomeIcon icon={faRocket} style={{ color: 'rgb(79,219,237)', }} />
              <h3>Trusted by aspiring frontend engineers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HowItWorks