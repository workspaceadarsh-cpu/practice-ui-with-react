import '../../../styles/main/main-container/PopularRecently.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRocket } from '@fortawesome/free-solid-svg-icons'
const PopularRecently = () => {
    return (
        <div>
            <div className="popular-main">
                <div className="heading-btn">
                    <h1 style={{ fontWeight: 500 }}>Popular & Recently Added</h1>
                    <button className='btn'>View all</button>
                </div>
                <div className="cards">
                    <div className="simple-counter">
                        <div className="head">
                            <h1>Simple Counter</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>Design a function `createCounter` that takes
                                an optional number</h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>easy</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>5 mins</span>
                            </div>
                        </div>
                    </div>

                    <div className="usebooleanfunc">
                        <div className="head">
                            <h1>useBoolean Function</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>Create a function called `useBoolean` that
                                manages a Boolean state</h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>medium</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>10 mins</span>
                            </div>
                        </div>
                    </div>

                    <div className="useCounterfunc">
                        <div className="head">
                            <h1>useCounter Function</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>Create a utility function called useCounter that 
                                helps you manage a numeric counter. It should </h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>easy</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>10 mins</span>
                            </div>
                        </div>
                    </div>
                    <div className="arraymean">
                        <div className="head">
                            <h1>Array Mean</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>Write a function called mean that calculates the 
                                average value of all numbers in an array.If th...</h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>easy</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>5 mins</span>
                            </div>
                        </div>
                    </div>
                    <div className="implemntcallfunc">
                        <div className="head">
                            <h1>Implement Call Function</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>The built-in JavaScript method<br />
                                `Function.prototype.call()`allows you to invok..</h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>easy</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>10 mins</span>
                            </div>
                        </div>
                    </div>
                    <div className="findmini-itrate">
                        <div className="head">
                            <h1>Find Minimum by Iteratee</h1>
                            <span>Javascript</span>
                        </div>
                        <div className="content">
                            <h5>Write a function minBy(array, iteratee) that
                                looks through an array and returns the eleme...</h5>
                        </div>
                        <div className="icon-rocket">
                            <div className="icon">
                                <button disabled><FontAwesomeIcon icon={faCheck} /></button>
                                <span>easy</span>
                            </div>
                            <div className="rocket">
                                <FontAwesomeIcon icon={faRocket} className='inner-icon'/>
                                <span>10 mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularRecently
