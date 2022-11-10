import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Event = () => {
    return (
        <div>
            <Helmet>
                <title >Event | Foodies Cuisine</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.toddle.com.au/_versions/media/articles/ba978645-edb7-4038-85d7-a0cfa7eb6819/kids-enjoying-birthday-party-food_article_img_xs.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CUSTOM EVENTS THAT ROCK</h1>
                        <p className="mb-5  text-xl">Planning an event?<br />
                            Foodies Cuisine is happy to host! You come to us with an idea and we'll make it happen!</p>

                        <Link to='/'> <button className="btn btn-success">Contact us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;