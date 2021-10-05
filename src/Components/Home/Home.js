import './Home.css'


const Home = (props) => {
  // getting data from Homeservice
  const {course,url,author,price}= props.data 
  return (
    // showing card
    <div >
      <div className="card">
        <div className="image">
          <img src={url} alt="" />
        </div>
        <div className="content">
        <h5> {course.slice(0,44)} </h5>
        <h6 className="text-muted">Instructor : {author} </h6>
          <button className="btn btn-warning mb-3" >Buy Now : ${price} </button>     
        </div>
      </div>
      
    </div>
  );
};

export default Home;