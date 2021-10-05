import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './HomeService.css'

const HomeService = () => {
  // fetching data
   const [courses,setCourses] = useState([])
  useEffect(() => {
    fetch('./home.json')
      .then(res => res.json())
      .then(data=>setCourses(data))
  },[])
  return (
    // homepage service part
    <div className="container course-home">
      {
          courses.map(element=><Home data={element} key={element.id}></Home>)
        }

    </div>
  );
};

export default HomeService;