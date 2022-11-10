import React from 'react';

const Reviewdetails = ({ review }) => {
    const { _id, photoURL, menuName, message, customer } = review;
    
    return (
        <div className="m-5 bg-base-200">
            <div>

                <h1 className='text-3xl text-green-600 font-semibold mb-2'>Review for {menuName} </h1>
            </div>
            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photoURL} alt="" className="max-w lg:max-w-xs rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{menuName}</h1>
                        <p className="py-6">{message}</p>
                        <button className="btn btn-success">{customer}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviewdetails;