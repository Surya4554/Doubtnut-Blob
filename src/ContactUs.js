import React from 'react';

const ContactUs = () => {
  return (
    <>
       <section className="contactus-section">
          <div className="container">
            <div className="row">
               <div className="col-12 col-lg-10 mx-auto">
                  <div className="row">
                     <div className="contact-leftside col-12 col-lg-5">
                        <h1 className="main-heading fw-bold">Contact With Our Founder <br />& Our Teams Member. </h1>
                        <p className="main-hero-para">Your Contact Us page can leave a lasting impression on existing and potential customers. Do away with generic templates and create a page that stands out in all the right ways.If you ask customers to submit inquiries on your page, ensure you use the Contact Us form wisely. Try to limit the form to the essentials—such as name, email, and reason for contacting with our Teams.</p>
                        <figure>
                             <img src="./images/hero5.jpg" alt="ContactImg" className="img-fluid" />
                        </figure>
                     </div>
                     <div className="contact-rightside col-12 col-lg-7">
                        <form method="POST">
                            <div className="row">
                                <div className="col-12 col-lg-6 contact">
                                   <input type="text" name="" id="" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-12 col-lg-6 contact">
                                   <input type="text" name="" id="" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 contact">
                                   <input type="text" name="" id="" className="form-control" placeholder="Contact Number" />
                                </div>
                                <div className="col-12 col-lg-6 contact">
                                   <input type="email" name="" id="" className="form-control" placeholder="Email ID" />
                                </div>
                            </div>
                            <div className="row">
                               <div className="col-12 contact">
                                  <input type="text" name="" id="" className="form-control" placeholder="Your Address" />
                               </div>
                            </div>
                            <div className="row">
                               <div className="col-12 contact">
                                  <input type="text" name="" id="" className="form-control" placeholder="Enter Your Message" />
                               </div>
                            </div>
                            <div className="form-check form-checkbox-style">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                              <label className="form-check-label main-hero-para" >I agree that the instantPay may contact me at the Email Address or Contact Number above.</label>
                            </div>
                            <button type='submit' className='btn btn-style w-100'>Submit Your Details</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
          </div>
       </section> 
    </>
  )
}

export default ContactUs;
