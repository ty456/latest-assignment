import React from 'react';
import img from '../img/05.png'
const About = () => {
  return (
    //creating about part
    <div className="container">
      <div className="row about d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img src={img} className="img-fluid w-75" alt="" />
        </div>
        <div className="col-lg-6 ">
          <h2 className="">Why Choose Learn With Joy ?</h2>
          <p>There are many variations of passages of course available, but the majority have suffered alteration in some form. There are many variations of passages of Best Course available.</p>
          <button className="btn btn-success">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;