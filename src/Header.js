import React from 'react'

const Header = () => {
  return (
    <>
       <header>
          <section className="container main-hero-container">
             <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                  <h1 className="display-2">Online Education Made <br /> Easy For You & Your.</h1>
                  <p className="main-hero-para">DoubtNut is a Free Online Education App for Everyone.It is a simple and very clear App to solve All types of Question.Doubtnut operates as an e-learning platform that enables users to ask study questions in Physics, Chemistry, and Math.If you want to solve your Doubt in easily with minimum time so you Download DoubtNut App and by taking photo simply solve your Doubt..</p>
                <h3>Get Early Access For You.</h3>
                <div className="input-group mt-3">
                   <input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email ID" />
                   <div className="input-group-button">Get it now</div> 
                </div>
                </div>   
                <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                   <img src="./images/hero1.png" alt="HeroImage" className="img-fluid" />
                   <img src="./images/hero2.png" alt="HeroImage" className="img-fluid main-hero-img2" />
                </div>  
             </div>       
          </section>
       </header>      
    </>
  )
}

export default Header;
;