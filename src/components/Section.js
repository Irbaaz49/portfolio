import React from "react";
import stars from "./images/stars.png";
import moon from "./images/moon.png";
import mountainsF from "./images/mountains_front.png";
import mountainB from "./images/mountains_behind.png";
import main from "./images/main-img.png";
import "./Section.css";
import { useState } from "react";
// import { Link } from 'react-scroll';

const Section = () => {
  const [offSet, setOffSet] = useState();
  const handleScroll = () => setOffSet(window.pageYOffset);
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <section>
        <img
          src={stars}
          style={{ left: offSet * 0.25 + "px" }}
          id="stars"
          alt="m"
        />
        <img
          src={moon}
          style={{ top: offSet * 1.5 + "px" }}
          id="moon"
          alt="m"
        />
        <img
          src={mountainB}
          style={{ top: offSet * 0.5 + "px" }}
          id="mountainsBehind"
          alt="m"
        />
        <h2 id="text" style={{ marginRight: offSet * 4 + "px" }}>
          Hello, Im Md.Irbaaz Hussain
        </h2>
        <a htmlFor="sec" style={{ marginTop: offSet * 1.5 + "px" }} id="btn">
          Explore
        </a>
        <img
          src={mountainsF}
          style={{ top: offSet * 0 + "px" }}
          id="mountains_front"
          alt="m"
        />
      </section>
  
        <div className="sec" id="sec">
          <img src={main} alt="me" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>developer and designer</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              culpa tempore, iusto corrupti vero et blanditiis, odit non ex
              numquam ipsa nesciunt neque? Modi eum nobis nostrum amet, fuga
              aperiam dolore dolores recusandae doloremque, magnam pariatur at
              optio necessitatibus quae facere ex iure eius reiciendis. Veniam
              quidem ea esse ratione.

            </p>
            <div className="hireBtn">
            <button>Lets talk </button>
            <button>Resume</button>

            </div>

          </div>
        </div>
     
    </>
  );
};

export default Section;
