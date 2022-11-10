import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const NewMenuDetails = ({ menu }) => {
    const { _id, menu_name, img, price, description, types } = menu;
    return (
        <div className="hero mr-3 m-5 bg-base-200">
            
            <div className="hero-content flex-col lg:flex-col">

                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img alt="dish" src={img} className="max-w-xs rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='grid'>
                    <h1 className="text-5xl font-bold">{menu_name}</h1>
                    <p className="py-6">{price}€ per person</p>


                    <p>{description}</p>
                    <p>{types}</p>


                    <div className='flex justify-between'>
                        <Link className='' to={`/checkout/${_id}`}> <button className="btn btn-success text-white m-2 ">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewMenuDetails;