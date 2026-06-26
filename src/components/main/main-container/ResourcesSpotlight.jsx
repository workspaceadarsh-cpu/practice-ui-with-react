import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/main/main-container/ResourcesSpotlight.css'

const ResourcesSpotlight = () => {
    return (
        <div>
            <div className="main-resources">
                <div className="heading-btn">
                    <h2>Resources Spotlight</h2>
                    <button className="btn">
                        Explore all
                    </button>
                </div>
                <div className="cards">
                    <div className="tutorial">
                        <span style={{
                            width: 95,
                            height: 24,
                            backgroundColor: 'rgb(15,32,64)',
                        }}>
                            <FontAwesomeIcon icon={faBookOpen} />
                            <h1 style={{ fontSize: 13, fontWeight: 100, }}>Tutorials</h1>
                        </span>
                        <h2>Hands-on learning</h2>
                        <h5>Interactive tutorials and labs to build real skills fast.</h5>
                    </div>
                    <div className="blogs">
                        <span style={{
                            width: 85,
                            height: 24,
                            backgroundColor: 'rgb(8,43,45)',
                        }}>
                            <FontAwesomeIcon icon={faBook} />
                            <h1 style={{ fontSize: 13, fontWeight: 100, }}>Blogs</h1>
                        </span>
                        <h2>Modern best practices</h2>
                        <h5>Stay current with React, JS, CSS, and performance.</h5>
                    </div>
                    <div className="courses">
                        <span style={{
                            width: 99,
                            height: 24,
                            backgroundColor: 'rgb(35,25,65)',
                        }}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <h1 style={{ fontSize: 13, fontWeight: 100, }}>Courses</h1>
                        </span>
                        <h2>Expert-led deep dives</h2>
                        <h5>From fundamentals to advanced patterns and system.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesSpotlight
