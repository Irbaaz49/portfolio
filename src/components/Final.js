import React from 'react'
import './Final.css';
import sun from './images/sun1.png'
import { useState } from 'react';
// import morning from './images/morning.png'

export const Final = () => {
    // const [offSet, setOffSet] = useState();
    // const handleScroll = () => setOffSet(window.pageYOffset);
    // window.addEventListener("scroll", handleScroll);
    return (
        <div className='ending'>
            {/* <img src={sun} style={{top:offSet + "px"}} alt="sun" /> */}
            {/* <img src={morning}   alt="" /> */}
            {/* <p id='lr'  style={{ top: offSet + "px" }}>Hello</p> */}
        </div>
    )
}
export default Final