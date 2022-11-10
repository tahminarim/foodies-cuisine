import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({ myreview,handleDelete,edit }) => {
    const { _id, menuName, message, photoURL, customer } = myreview;
    console.log(photoURL,customer)
    return (
        

            <div className="hero rounded-xl m-5 bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xs">
                        <h1 className="text-2xl font-bold">My Review for {menuName}</h1>
                        <p className="py-6">{message}</p>
                        <div className=' grid gap-2 lg:flex  justify-between'>
                        <Link to={`/reviews/${_id}`}> <button className="btn btn-success btn-wide text-white">Edit</button></Link>
            
                        <button onClick={() => handleDelete(_id)}  className="btn btn-outline btn-success btn-wide">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default MyReviewDetails;