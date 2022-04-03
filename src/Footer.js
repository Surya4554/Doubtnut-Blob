import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
             <div className="container">
               <div className="row">
                   <div className="col-12 col-lg-10 mx-auto">
                      <div className="row">
                         <div className="col-6 col-lg-3">
                           <h2>DoubtNut</h2>
                              <ul>
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">Services</a></li>
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Contact Us</a></li>
                              </ul>
                         </div>
                         <div className="col-6 col-lg-3">
                           <h2>Support</h2>
                              <ul>
                                  <li><a href="#"><strong>WhatsApp:-</strong> 9598894554</a></li>
                                  <li><a href="#"><strong>Toll Free:-</strong> 1800 122 180</a></li>
                                  <li><a href="#"><strong>Email ID:- </strong> skp4554@gmail.com</a></li>
                                  <li><a href="#"><strong>Address:-</strong> CB Complex Varanasi (UP)</a></li>
                              </ul>
                         </div>
                         <div className="col-6 col-lg-3">
                           <h2>Services</h2>
                              <ul>
                                  <li><a href="#">Education</a></li>
                                  <li><a href="#">Test Series</a></li>
                                  <li><a href="#">Mentoring</a></li>
                                  <li><a href="#">Live Lectures</a></li>
                              </ul>
                         </div>
                         <div className="col-6 col-lg-3">
                           <h2>Follow Us :- </h2>
                            <div className="row">
                                <div className="col-3 mx-auto">
                                   <a href="https://www.facebook.com/suryakumar.surya.752861/"><i className="fab fa-facebook-f fontawesome-style"></i></a>
                                </div>
                                <div className="col-3 mx-auto">
                                   <a href="https://www.instagram.com/suryakumarsurya4554/"><i className="fab fa-instagram fontawesome-style"></i></a>
                                </div>
                                <div className="col-3 mx-auto">
                                   <a href="https://www.youtube.com/channel/UCNsMyt2hPx4Yt0oTNdnD4YQ"><i className="fab fa-youtube fontawesome-style"></i></a>
                                </div>
                                <div className="col-3 mx-auto">
                                   <a href="https://www.linkedin.com/in/suraj-kumar-prajapati/"><i className="fab fa-twitter fontawesome-style"></i></a>
                                </div>
                            </div>
                         </div>
                      </div>
                      <hr />
                      <div className="mt-5">
                          <p className="main-hero-para text-center w-100"> Copyright @ 2021 instantPay, All rights Reserved.</p>
                      </div>
                   </div>
               </div>
             </div>          
      </footer> 
    </>
  )
}

export default Footer;
