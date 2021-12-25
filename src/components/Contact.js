import React from 'react';
import "./Contact.css"
import {
   FaAddressBook,FaPhoneSquare, FaEnvelope, FaUser
  } from "react-icons/fa";

const Contact = () => {
    let contact= "< Contact Me />"
  
    return (
        <>
             <div className="contact" id="contact">
                
        <div className="max-width">
            <h2 className="title">{contact}</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch <FaAddressBook style={{fontSize:"20px", color:"crimson"}}/></div>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p> */}
                    <div className="icons">
                        <div className="row">
                            <i ><FaUser/></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Md. Irbaaz Hussain</div>
                            </div>
                        </div>
                        <div className="row">
                            <i ><FaPhoneSquare/></i>
                            <div className="info">
                               <div className="head">Phone </div>
                               <a href="tel:+917660963597">   <div className="sub-title">7660963597</div> </a>
                            </div>
                        </div>
                        <div className="row">
                            <i ><FaEnvelope/></i>
                            <div className="info">
                                <div className="head">Email </div>
                             <a href="mailto:irbaazhussain49@gmail.com">  <div className="sub-title">irbaazhussain49@gmail.com</div></a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form action="/">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
        </>
    )
}

export default Contact
