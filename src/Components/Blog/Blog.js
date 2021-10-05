import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
  // fetching data 
  const [blogs,setBlogs] = useState([])
  useEffect(() => {
    fetch('./Blog.json')
      .then(res => res.json())
      .then(data=>setBlogs(data))
  },[])
  return (
    // sending data to blogs
     <div class="container">
  <div class="row">
     {
          blogs.map(element=> <Blogs data={element} key={element.id} ></Blogs> )
        }
  </div>    
</div>

    
  );
};

export default Blog;