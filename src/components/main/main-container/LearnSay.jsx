import '../../../styles/main/main-container/LearnSay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const LearnSay = () => {
    return (
        <div>
            <div className="main-learnsay">
                <div className="heading">
                    <h1>What Learners say</h1>
                </div>
                <div className="card">
                    <div className="feedback">
                        <div className="heading-logo">
                            <FontAwesomeIcon icon={faComment} style={{ color: 'aqua' }} />
                            <h1>Feedback</h1>
                        </div>
                        <h5 style={{ fontSize: 15, }}>“The problems feel like real interview tasks.”</h5>
                        <h6 style={{ fontSize: 13, color: 'gray' }}>— Frontend Developer</h6>
                    </div>
                    <div className="feedback">
                        <div className="heading-logo">
                            <FontAwesomeIcon icon={faComment} style={{ color: 'aqua' }} />
                            <h1>Feedback</h1>
                        </div>
                        <h5 style={{ fontSize: 15, }}>“Clean UI and instant feedback helped me ship faster.”</h5>
                        <h6 style={{ fontSize: 13, color: 'gray' }}>— Frontend Developer</h6>
                    </div>
                    <div className="feedback">
                        <div className="heading-logo">
                            <FontAwesomeIcon icon={faComment} style={{ color: 'aqua' }} />
                            <h1>Feedback</h1>
                        </div>
                        <h5 style={{ fontSize: 15, }}>“Loved the React preview and JS utilities focus.”</h5>
                        <h6 style={{ fontSize: 13, color: 'gray' }}>— Frontend Developer</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnSay
