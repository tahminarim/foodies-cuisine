import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/favicon.png';
import img1 from '../../assets/banner/3.png';
import { Helmet } from 'react-helmet';


const Catering = () => {

    return (
        <div className='py-5'>
            <Helmet>
                <title>Catering | Foodies Cuisine</title>
            </Helmet>
            <div className="hero m-5  bg-green-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt="" src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl  font-bold">CATERING TO ROCK ANY OCCASION</h1>
                        <p className="py-6">Get a fresh take on Catering, and be as casual or as
                            down-to-business as you like. Hard Rock Cafe Catering rocks any occasion. From business lunches and birthday parties to engagement parties and family reunions, Hard Rock Cafe has you covered. Choose from our Legendary Burger Bar, Create-Your-Own Nacho Station, Party Platters, Famous Fajitas,
                            and much more. Our Catering array is sure to please all of your guests!</p>
                        <Link to="/histories"> <button className="btn btn-warning">Explore Us</button></Link>
                    </div>
                </div>
            </div>

            <div className="hero m-5 bg-green-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-xl font-bold">
                            OUR BIRYANI ARE SO FAMOUS...
                            THEY HAVE THEIR OWN CHAUFFEURS</h1>

                        <p className="py-6 sm:text-xs">Catering not your thing? Hard Rock
                            Cafe also offers Fast, Fresh Delivery. Our Legendary menu
                            items are just a click away from being delivered straight to your front door.</p>
                        <Link to='/allmenu'> <button className="btn btn-warning">Choice your food</button></Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Catering;