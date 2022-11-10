import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviewdetails from './Reviewdetails';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    return (

        <div>
           
            {
                            reviews.map(review => <Reviewdetails
                                key={review._id}
                                review={review}
                            ></Reviewdetails>)
                        }
 
        </div>

    );
};

export default Reviews;