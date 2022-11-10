import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MenuDetails = () => {
    const { menu_name, price, img, _id, description, types } = useLoaderData();
    const {  loading } = useContext(AuthContext);
    if (loading) {
        return <>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div></>
    }

    return (
        <div>
            <div className="hero  min-w-min  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>

                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt='' className="sm:m-2  max-w-xs lg:max-w-sm rounded-lg shadow-xl" />

                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{menu_name}</h1>
                        <p className="py-6 sm:m-5 p-5">{description}</p>


                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3'>
                <div className='grid justify-center items-center'>
                    <p className='text-sm lg:text-xl text-green-600 font-bold text-center'>{types[0].one} {menu_name}</p>
                    <p className='text-green-600  text-center'> {price}€</p>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={types[0].img}>
                                <img src={types[0].img} alt='' className="sm:m-5 p-5 min-w lg:max-w-xs rounded-lg  shadow-5xl" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                </div>

                <div className='grid justify-center items-center'>
                    <p className='text-sm lg:text-xl text-green-600 font-bold text-center'>{types[1].two} {menu_name}</p>
                    <p className='text-green-600  text-center'> {price}€</p>
                    <div>
                        <PhotoProvider>
                            <PhotoView src={types[1].img}>
                                <img src={types[1].img} alt='' className="sm:m-5 p-5 min-w lg:max-w-xs rounded-lg  shadow-5xl" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>

                <div className='grid justify-center items-center'>
                    <p className='text-sm lg:text-xl text-green-600 font-bold text-center'>{types[2].three} {menu_name}</p>
                    <p className='text-green-600  text-center'> {price}€</p>

                    <div>
                        <PhotoProvider>
                            <PhotoView src={types[2].img}>
                                <img src={types[2].img} alt='' className="sm:m-5 p-5 min-w lg:max-w-xs rounded-lg  shadow-5xl" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
            <div className='grid justify-center'>
                <Link to={`/checkout/${_id}`}> <button className="btn btn-success text-white m-2 text-xl lg:text-3xl mt-2">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuDetails;