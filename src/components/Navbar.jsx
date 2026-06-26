import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [btn, setbtn] = useState(false)

    return (
        <div>
            <div className="navbar">
                <div className="navcontainer">
                    <div className="name-logo">
                        <div className="logo" style={{ display: 'flex', alignItems: 'center', }}>
                            <button disabled>
                                <FontAwesomeIcon icon={faCode} style={{ height: 20, width: 20, color: 'white' }} />
                            </button>
                        </div>
                        <div className="name">
                            <h2>FrontendArk</h2>
                            <h6>Master Frontend Interviews</h6>
                        </div>
                    </div>
                    <button
                        className="menu-btn"
                        onClick={() => setbtn(!btn)}
                    ><FontAwesomeIcon icon={faBars} /></button>
                    <div className={`nav-content ${btn ? "active" : ""}`}>
                        <div className="practice">
                            <button style={{
                                fontSize: 17,
                                backgroundColor: 'rgb(17,22,39)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 'bolder',
                            }}>
                                Practice
                            </button>
                        </div>
                        <div className="category">
                            <select
                                name="category"
                                id="category"
                                style={{
                                    fontSize: "17px",
                                    backgroundColor: "rgb(17,22,39)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontWeight: "bold",
                                }}
                            >
                                <option value="" style={{ display: 'none', }} className="categorySelect">Category</option>
                                <option value="function">Function</option>
                                <option value="ui">UI</option>
                            </select>
                        </div>
                        <div className="playground">
                            <button style={{
                                fontSize: 17,
                                backgroundColor: 'rgb(17,22,39)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 'bolder',
                            }}>
                                Playground
                            </button>
                        </div>
                        <div className="Resources">
                            <button style={{
                                fontSize: 17,
                                backgroundColor: 'rgb(17,22,39)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 'bolder',
                            }}>
                                Resources
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar