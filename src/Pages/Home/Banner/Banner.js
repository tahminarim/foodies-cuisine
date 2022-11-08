import React from 'react';
import img1 from '../../../assets/banner/1.png';
import img2 from '../../../assets/banner/2.png';
import img3 from '../../../assets/banner/3.png';
//import BannerDetails from './BannerDetails';

const Banner = () => {
    return (
<div className="carousel w-full lg:ml-12  lg:w-3/4 border rounded-xl">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-0 top-1/2">
      <a href="#slide4" className=" btn btn-circle  btn-success">❮</a> 
      
      <a href="#slide2" className=" btn btn-circle btn-success">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img1} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className=" btn btn-circle btn-success">❮</a> 
      <a href="#slide3" className=" btn btn-circle btn-success">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img2} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className=" btn btn-circle btn-success">❮</a> 
      <a href="#slide4" className=" btn btn-circle btn-success">❯</a>
    </div>
    
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className=" btn btn-circle btn-success">❮</a> 

      <a href="#slide1" className=" btn btn-circle btn-success">❯</a>
    </div>
  </div>

</div>
    );
};

export default Banner;