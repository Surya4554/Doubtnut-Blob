import React, {useState} from 'react';
import aboutApi from './API/aboutApi';
import { aboutApi2 } from './API/aboutApi';

const AboutUs = () => {
    const [data, setData] = useState(aboutApi);
    const [secondData, secondaSetData] = useState(aboutApi2);
  return (
    <>
       <section className="common-section our-services">
          <div className="container mb-5">
                <div className="row">
                  <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                    <img src="./images/hero3.png" alt="AboutImg" />
                  </div>
                  <div className="col-12 col-lg-7 our-services-list">
                     <h3 className="mini-title"> -- Available @ App Google Play Store Only</h3>
                     <h1 className="main-heading">How To Use The App ?</h1>
                       {data.map((curElem) => {
                           const {id, title, info} = curElem;
                          return (
                              <>
                                 <div className="row our-services-info" key={id} >
                                   <div className="col-1 our-services-number"> {id} </div>
                                   <div className="col-10 our-services-data">
                                      <h2> {title} </h2>
                                      <p className="main-hero-para"> {info} </p>
                                   </div>
                                </div>
                              </>
                          );
                       })}
                      <br />
                      <button className="btn-style btn-style-border">Learn More</button>
                  </div>
                </div>
          </div>
       </section>

       <section className="common-section our-services our-srvices-rightside">
          <div className="container mb-5">
                <div className="row">
                  <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                     <h3 className="mini-title"> -- Support In Any Languages</h3>
                     <h1 className="main-heading">World Class Support Infrasrtucture <br /> Available By Us 24/7 System.</h1>
                       {secondData.map((curElem) => {
                           const {id, title, info} = curElem;
                          return (
                              <>
                                 <div className="row our-services-info" key={id} >
                                   <div className="col-1 our-services-number"> {id} </div>
                                   <div className="col-10 our-services-data">
                                      <h2> {title} </h2>
                                      <p className="main-hero-para"> {info} </p>
                                   </div>
                                </div>
                              </>
                          );
                       })}
                      <br />
                      <button className="btn-style btn-style-border">Learn More</button>
                  </div>
                  <div className="col-12 col-lg-5 our-service-rightside-img">
                    <img src="./images/hero4.png" alt="AboutImg" />
                  </div>
                </div>
          </div>
       </section>
    </>
  )
}

export default AboutUs;
