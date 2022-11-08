import React from 'react';
import { Link } from 'react-router-dom';

const SingleMenu = ({menu}) => {
    const {_id, img, price, menu_name} = menu;
    return (
<div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <img alt="dish" src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{menu_name}</h1>
      <p className="py-6">{price}€ per person</p>
      <button className="btn  btn-outline btn-success">See More </button>
      <Link to={`/allmenu/${_id}`}> <button className="btn btn-success">Buy Now</button></Link>

    </div>
  </div>
</div>
    );
};

export default SingleMenu;