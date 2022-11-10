import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const History = ({ menu }) => {
    const { _id, img,types, description, price, menu_name } = menu;
    return (
        <div className="hero bg-base-200">
            <div className="hero-content min-w-xs flex-col lg:flex-col">

                <div>
                    <PhotoProvider>
                        <PhotoView src={img} className="min-w-xs rounded-lg shadow-2xl">
                            <img alt="dish" src={img} className="min-w-xs px-4 rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='grid'>
                    <h1 className="text-2xl font-bold">{menu_name}</h1>
                    <p className="py-6">{price}€ per person</p>


                    <p className='text-xs px-2'>{description}</p><br/>

                    <p className='text-xs px-2'># {types[0].one} {menu_name}</p>
                    <p className='text-xs px-2'># {types[1].two} {menu_name}</p>
                    <p className='text-xs px-2'># {types[2].three} {menu_name}</p>

                    <div className='flex justify-center'>
                       <Link className='' to={`/checkout/${_id}`}> <button className="btn btn-success lg:btn-wide text-white m-2 ">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default History;