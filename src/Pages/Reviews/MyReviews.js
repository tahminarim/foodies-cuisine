import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myreviews, setMyReviews] = useState([]);
   // const[reviews,setReviews] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('foodies-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                //console.log('settle review', data)
                setMyReviews(data);
            })
    }, [user?.email, logOut])

// delete a review

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete the review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
             
            })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Your Review');
                    const remain = myreviews.filter(myreview => myreview._id !== id);
                    setMyReviews(remain);
                }
            })
        }

    }



    return (
        <div>
            <Helmet>
                <title>MyReviews| Foodies Cuisine</title>
            </Helmet>
            <div className='flex justify-center py-5'>
            <img style={{ height: '50px' }} src={user?.photoURL || user?.photoURL} alt="" className='rounded-full' />
            <h1 className="text-xl text-green-500 font-bold"> {user?.displayName || user?.name}!  </h1>
            <br/>
            {
            myreviews.length <=0 ?
              <p className="text-xl text-green-500 font-bold"> You have no reviews !! Oops!
              </p>
              :
              <p className="text-xl text-green-500 font-bold">You have {myreviews.length} reviews</p>
          }

            </div>
           <div className='max-w-xs lg:max-w-6xl'>
                {
                    myreviews.map(myreview => <MyReviewDetails
                        key={myreview._id}
                        myreview={myreview}
                        
                        handleDelete={handleDelete}
                    ></MyReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReviews;