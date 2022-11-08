import React from 'react';
import './BannerDetails.css'

const BannerDetails = ({slide}) => {
    const {id,image,next,prev}= slide;
    return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img alt="banner "    src={image} className=" w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-10 top-1/4">
          <h1 className='text-6xl font-bold text-success '> Good food <br/>
          Good mood<br/>
          with FoodisCuisine </h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 right-10  top-1/2">
          <p className='text-success'> We provide many types of cook food,<br/> hurry up to taste our dishes</p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 right-10  top-3/4">
            <button className="btn btn-success mr-5">Order Now</button>
            
            <button className="btn btn-outline btn-success">Get Updates</button>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle bg-success">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle bg-success">❯</a>
            </div>
    
      </div> 
    );
};

export default BannerDetails;