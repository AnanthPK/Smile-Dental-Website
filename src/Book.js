
import {  Route, Routes,Link} from "react-router-dom";
import React, { useState } from "react";
import emailjs from "emailjs-com";


function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
    address: "",
    message: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_russ4sa",
        "template_7mjpmyk",
        e.target,
        "Z82VHvjcjcYx_eQpw"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone:"",
          email: "",
          address: "",
          message: "",

        });
      })
      .catch((error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });
    };

  
  return (
    
    <div className='formBack' data-aos="zoom-out-up" data-aos-duration="1000">
      

        <div className="row container-fluid formMain">

          <div className="col-lg-3"></div>
          <div className="col-lg-6 formBg ">
            <center >
              <form onSubmit={handleSubmit}>
                <div>
              <lable class="formM">Name</lable><br/>
              <input type="text" name="name"
          value={formData.name}
          onChange={handleChange}
          required placeholder="Name" /><br/>
          </div>
          <div>
              <lable class="formM">Phone</lable><br/>
              <input type="phone" name="phone"
          value={formData.phone}
          onChange={handleChange}
          required placeholder="Enter Your Phone Number" /><br/>
          </div>
          <div>
              <lable class="formM">E-Mail</lable><br/>
              <input type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required placeholder="Enter Your E-mail ID" /><br/>
          </div>
          <div>
              <lable class="formM">Address</lable><br/>
              <input type="address" name="address"
          value={formData.address}
          onChange={handleChange}
          required placeholder="Enter Your Address" /><br/>
          </div>
          <div>
              <lable class="formM">Comment</lable><br/>
              <input type="textarea" name="message"
          value={formData.message}
          onChange={handleChange}
          required placeholder="Message" />
              </div>
              <button class="atf_buttons">Submit</button>
              </form>

            </center>
          </div>
          <div class="col-lg-3 crossbg" >
            <Link to="/">
          <img class="cross"src={require("./images/cross.png")} alt="tooth icon"/></Link>
          </div>

        </div>



    </div>
  )
}

export default About