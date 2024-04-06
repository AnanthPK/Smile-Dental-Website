import React from 'react'
import {  Route, Routes,Link} from "react-router-dom";


function Home() {
  return (
    <div>

        {/* // navigation */}
    
      <div className="row container-fluid">
      <header className="col-lg-12 nav">
        <div className="logo">
        <img src={require("./images/Logo.png")} alt="tooth icon"/>
        </div>
        
        <nav className="nav_text" id="myNavBar">
            <a className="active" href="#">Home</a>
            <a href="#abt">About Us</a>
            <a href="#os">Services</a>
            <a href="#ot">Our Team</a>
        </nav>
        <div className="cta">
            <span><a href="#ft">Contact Us</a> </span>
        </div>
    </header> 
      </div>

      {/* Hero Section */}
      <div className="row container-fluid Heromainsec">
        <div className="col-lg-1"></div>
      <div className="col-lg-5 heroFirst">
      <img src={require("./images/tooth_icon.png")} alt="tooth icon"/>
            <h1>Providing Digital <br/> Dentistry Services</h1>
            <p className="heroPara">Our team believes in accessible dental care. We offer straightforward pricing, clear estimates, and an unprecedented dental warranty.</p>
            <div className="atf_btn" >
                <div ><Link to="/Book"><button class="atf_buttons"> <span className="button-content1">Book Appointment</span> </button></Link></div>
                <div><a href="#ft">
                    <button className="atf_buttons"><span class="button-content2"></span>Contact Us</button></a></div>
            </div>

            <div class="teeth_icon_sec">
                <div className="teet_icon"><img src={require("./images/png-dental.png")} alt=""/></div>
                <div className="dentalImg">
                    <p>“Our word is our worth. We promise to do it right, timely, and for a fair price.”</p><br/>
                    <hr className="line"/>
                    <img src={require("./images/down-arrow.png")} alt="down arrow"/>
                </div>
            </div>
            </div>
            

  {/* image Section */}
          <div className="col-lg-6 homeMainsection" data-aos="fade-up" data-aos-duration="1000">

            <div className="threeImgs">
                <div className="twoImgs">
                    <div><img className="hImg1" src={require("./images/dental-veneer-tips.jpg")} alt="home section image1"/></div>
                    <div><img className="hImg2" src={require("./images/dentist-woman-holding-tools-isolated-pink-background-pointing-side-present-product_1368-247372 (1).png")} alt="home section image2"/></div>
                </div>

                <div>
                    <img className="hImg3" src={require("./images/a5a3a0b4408a7fa7b7d840e6bfbb3017.jpg")} alt="home section image3"/>
                </div>
            </div>


{/* Numbers */}

            <div className="NumbersWithtext">

                <div>
                    <h5>1500</h5>
                    <p>Online</p>
                    <p>Appointment</p>
                </div>

                <div>
                    <h5>120 K</h5>
                    <p>Recovered</p>
                    <p>Patients</p>
                </div>

                <div>
                    <h5>96 %</h5>
                    <p>Satisfaction</p>
                    <p>Rate</p>
                </div>
            </div>
        </div> 
        </div>

{/* about section */}
<div className='row aBt' id='abt'>
    <div className='col-lg-1'></div>
    <div className='col-lg-5 abtLefttext'>
        <h3>We Are Giving the Highest <br />
Quality Service Here</h3>
    </div>
    <div className='col-lg-5 abtRighttext'>
        <p>If you are looking for a reliable dentist in town, we are here to help. We are known for the best, affordable, and painless dental treatments with quick appointments and timely solutions.</p>
    </div>
    <div className='col-lg-1'></div>

</div>

{/* Service box Section */}
<div className='row serBox container-fluid' >
   
    <div className='col-lg-3 serBox1' data-aos="flip-left" data-aos-duration="1000">
    <img src={require("./images/Bondingicon.png")} alt="sevice icon1"/>
        <h5>Dental implants</h5>
        <p>Loss of teeth is one of the most common issues faced. For many years, the only option available for replacing..</p>
    </div>
    <div className='col-lg-3 serBox2'data-aos="flip-left" data-aos-duration="1000">
    <img src={require("./images/Whiteningicon.png")} alt="service icon2"/>
        <h5>Emergency Dentistry</h5>
        <p>Our company integrates the most up-to-date laser technology to deliver excellent care in a range of teeth whitening</p>
    </div>
    <div className='col-lg-3 serBox3'data-aos="flip-left" data-aos-duration="1000">
    <img src={require("./images/Bondingicon.png")} alt="service icon3"/>
        <h5>Root Canal Treatment</h5>
        <p>Don’t let a painful tooth ruin your day, let our Root Canal therapy service save the day! Our team of experts.</p>
    </div>  
</div>

{/* why choose us */}
<div class="row whyChoosusmain" >
    <div className='col-lg-1'></div>
        <div class="col-lg-5 whyChooseimg" data-aos="fade-right" data-aos-duration="1000">
            <img class="whychooseimage" src={require("./images/WhyChoosUs.jpg")} alt=""/>
        </div>
        <div class="col-lg-5 whyChooseCont">
            <div><h3> Reasons to Choose Smile Dental</h3></div>
            <div><p>We’re a group of energetic, values-driven dental clinicians dedicated to caring for all people — young to young at heart. Since 2002, we’ve been combining exciting technology with a warm and friendly team to deliver exceptional dentistry in Smile Dental Clinic. Find all the dental care you need (and then some) here in our beautiful office</p>
            <p>Don’t let a painful tooth ruin your day, let our Root Canal therapy service save the day! Our team of experts will make sure your root canal therapy is as painless as possible and have you back to your normal routine in no time. At our clinic, we use the latest technology and techniques to ensure that your root canal therapy is comfortable and efficient.</p>
            </div>
            <div class="whyChoosbtn"><a href="#os"><button class="atf_buttons"> <span class="button-content1"> Read More</span> </button></a></div>
        </div>
        <div className='col-lg-1'></div>

    </div>

  {/*Our Service*/}
       
<div className='row ourServmain'id='os'>
    <div className='col-lg-1'></div>
    <div className='col-lg-5 ourServpoint'>
    <h3>About Our Services</h3>
            <span>
                <ol>
                    <li>These tests will lead to a diagnosis and treatment plan. For very small cavities, we may simply recommend a wait-and-see approach.</li>
                    <li>If the cavity is large and painful or located in a hard-to-reach area, a filling is often recommended.</li>
                    <li>Treating a cavity with a filling involves removing decayed tooth structure, followed by a cavity filling that “fills” the hole in your teeth, protecting your tooth from further decay.</li>
                    <li>At our office, we offer white fillings. White fillings are natural-looking and durable.
                        </li>
                    <li>At our clinic, we use the latest technology and techniques to ensure that your root canal therapy is comfortable and efficient. Don’t let a bad tooth bring you down, let us root out the problem and have you smiling again in no time.</li>
                    <li>A tooth is composed of three layers: the outer enamel, the middle dentin, and the inner pulp (which contains nerves and blood vessels). Decay or damage to a tooth can occur in any of these layers, but it typically starts in the enamel. As the decay progresses, it can reach the dentin and pulp, causing severe pain and infection.</li>
                </ol>
            </span>
            <a href="#ot"><button className="atf_buttons"><span class="button-content2"></span>More About Our Team Members</button></a>
    </div>
    <div  className='col-lg-5 ourServcards '>
    <div class="OurSerrow1">
            <div class="cardServices1"data-aos="flip-left" data-aos-duration="1000">
                <img src={require("./images/Bondingicon.png")} alt="Bonding"/>
                <h5>Bonding</h5>
                <p>Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.</p>
                
            </div>

            <div class="cardServices2" data-aos="flip-left" data-aos-duration="1000">
                <img src={require("./images/Crownicon.png")} alt="Crown"/>
                <h5>Crowns</h5>
                <p>We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
              
            </div>
        </div>
        <div class="OurSerrow2" data-aos="flip-left" data-aos-duration="1000">
            <div class="cardServices3">
                <img src={require("./images/Whiteningicon.png")} alt="Whitening"/>
                <h5>Whitening</h5>
                <p>Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
            </div>

            <div class="cardServices4" data-aos="flip-left" data-aos-duration="1000">
                <img src={require("./images/implanticon.png")} alt="" />
                <h5>Implants</h5>
                <p>We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
                
            </div>
        </div>
    </div>

    <div className='col-lg-1'></div>
    
</div>

{/* Meet Client Section */}
<div className='row meetClient' id='ot'>
    <div className='col-lg-1' > </div>
    <div className='col-lg-5'><h3>Meet Smile Dental Clinic's </h3><h3>Specialists Team</h3></div>
    <div className='col-lg-5'><p>At Smile Dental Clinic, you are in good hands. With every treatment, we promise to do it right, quickly, and for a fair price. And we provide a lifetime warranty on all our work</p></div>
    <div className='col-lg-1' > </div>
</div>

{/* clients card section */}
<div className='row teamCardsec'>
<div class="col-lg-1 teamIcon">
            <img src={require("./images/backbuttonicon.png")} alt="Back Button"/>
        </div>

        <div class="col-lg-3 teamCard1" data-aos="flip-up" data-aos-duration="1000">
            <img src={require("./images/Team1.png")} alt=""/>
            <h5>Dental Implants</h5>
            <p>Anjelina James</p>
        </div>

        <div class="col-lg-3 teamCard1" data-aos="flip-up" data-aos-duration="1000">
            <img src={require("./images/Team2.png")} alt=""/>
            <h5>Dental Implants</h5>
            <p>Emma Watson</p>
        </div>

        <div class="col-lg-3 teamCard1"data-aos="flip-up" data-aos-duration="1000">
            <img src={require("./images/Team3.jpg")} alt=""/>
            <h5>Dental Implants</h5>
            <p>Dakota Johnson</p>
        </div>
        

        <div class="col-lg-1 teamIcon">
            <img src={require("./images/next-modified.png")} alt="Next Button"/>
        </div>
</div>

{/* Footer */}
<div className='row footerMain' id='ft'>
<div class="col-lg-3 siteMap">
            <h5>Site Map</h5>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Help</p>
            <p>Contact Us</p>
        </div>

        <div class="col-lg-3 contactInfo">
            <h5>Contact Info</h5>
            <p>Smile Dental Clinic, <br /> No 8, South 3rd St, <br /> Velachery Chennai 600100.</p>
            <p>Phone : 044-674524</p>
            <p>E-Mail : smiledental@gmail.com</p>
        </div>
        
        <div class="col-lg-3 workHours">
            <h5>Work Hours</h5>
            <p>Monday 9am to 6pm</p>
            <p>Tuesday 9am to 6pm</p>
            <p>Wednesday 9am to 6pm</p>
            <p>Thursday 9am to 6pm</p>
            <p>Sat & Sunday 10am to 5pm</p>
        </div>

        <div class="col-lg-3 subform">
            <h5>Subscribe Us</h5>
            
            <input type="text" placeholder="Enter Your Full Name"/><br />
            
            <input type="Phone" placeholder="Enter Your Phone Number"/><br />

            <input type="Email" placeholder="Enter Your Email ID"/><br />
            <input type="submit" value="Submit" class="submitBtn"/>

        </div>
        </div>
{/* Extended Footer */}

<div class="row extFooter">
        
        <div class="col-lg-12 copyRight">
            <hr />
            <p>2020 © Smile Dental Clinc - Designed By PKWeblab</p>
        </div>

    </div>

        
    

    </div>
  )
}

export default Home