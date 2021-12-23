import React from "react";
import "./Section2.css";
import pic from "./images/main-img.png";
// import Typewriter from 'typewriter-effect/dist/core';
const Section2 = () => {
  let about = "<About Me/>";
  let bio = "< If i would like to describe myself in a sentence it would be am highly organised and motivated person, capable of time management and working under pressure in all environments, Am seeking a position in a organisation where i can launch my career and upgrade my skills with time and take the organisation to the next level />"
  return(
  <>
  {/* re<!-- about section start --> */}
  <div className="about" id="about">
      <div className="max-width">
          <h2 className="title">{about}</h2>
          <div className="about-content">
              <div className="column left">
                  <img src={pic} alt=""/>
              </div>
              <div className="column right">
                  <div className="text"> I'm Mohd Irbaaz Hussain, <span className="typing-2">
                  </span>Self learned front end developer</div>
                  <p>{bio}</p>
                  <a href="/">Hire Me</a>
              </div>
          </div>
      </div>
  </div>

      {/* <div className="m-about" id="abt">
        <div className="my-max-width">
          <h2 className="my-title">About me</h2>
          <div className="my-about-content">
            <div className="column left">
              <img src={pic} alt="f" />
            </div>
            <div className="column right">
                <div className="my-text">
                I'm Mohd Irbaaz Hussain, Self Learnd Front end developer. 
                </div>
                <p>  If i would like to describe myself in a sentence it would be am highly organised and motivated person, capable of time management and working under pressure in all environments.
              Am seeking a position in a organisation where i can launch my career and upgrade m skills with time and take the organisation to the next level. </p>
          <a href="/">Download Resume</a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Section2;
