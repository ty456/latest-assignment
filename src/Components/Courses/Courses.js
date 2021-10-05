import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Courses.css'

const Courses = () => {
  // fetching all course data
    const [service,setServices] = useState([])
  useEffect((() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data=>setServices(data))
  }),[])

  return (
    // sending data to services
    <div className="container">
      <div className="courses">
      {
         service.map(element=><Services data={element} key={element.id} ></Services>)
       }
      </div>
    
    </div>
  );
};

export default Courses;


