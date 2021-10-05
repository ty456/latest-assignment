import React from 'react';
import img from '../img/blog.jpg'
const BlogUi = () => {
  return (
    // first blog part
    <div className="container">
      <img src={img} className="img-fluid" alt="" />
      <h3 className="text-center my-3">Lots of new Blogs & News</h3>
    </div>
  );
};

export default BlogUi;