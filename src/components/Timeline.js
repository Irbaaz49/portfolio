import React from 'react'
import timelineElements from './TimelineElement';
import{VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {
    FaGraduationCap,FaLaptopCode,FaHtml5,FaCss3,FaJs,FaGit,FaGithub,FaReact,FaNodeJs
  } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css';
// import achieve from './images/5891.jpg';

function Timeline() {
    let workIconStyles = {background :'#06D6A0'};
    let schoolIconStyles = {background :'#F9C74F'};
    let education = "< Education />";
let skills ="< My Skills />";

    return (
        <>
        <div className='education' >
        <h2 className='education-heading'>{education}</h2>
        {/* <img src={achieve} alt="d" /> */}

        <VerticalTimeline>
            {
                timelineElements.map(element => {

                    let isWorkIcon = element.icon === "work";
                    let ShowButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                    return(
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <FaLaptopCode/> : <FaGraduationCap/> }
                      
                        >
                            
                            <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                         <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                    <p id='description'>{element.description}</p>
                   <p>{element.buttonText}</p>
                
                    </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
        </div>

        <div className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">{skills}</h2>
            <div className="skills-content">
            
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span><FaHtml5/></span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Node Js</span>
                            <span><FaNodeJs/></span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span><FaJs/></span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span><FaReact/></span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>GITHUB</span>
                            <span><FaGithub/></span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span><FaCss3/></span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Mongo db</span>
                            <span></span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>GIT</span>
                            <span><FaGit/></span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>




























        </>

    )
}

export default Timeline
