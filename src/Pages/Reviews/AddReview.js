import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { _id, menuName } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'nonregistered';
        const photoURL = form.photoURL.value;
        const message = form.message.value;

        const review = {
            menu_id: _id,
            menuName: menuName,
            photoURL,
            customer: name,
            email,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err));
        event.target.reset();

    }
    return (
        <div>

            <h1 className='text-xl text-center text-green-600 font-semibold mb-2'> You are about to review for {menuName} </h1>

            <form onSubmit={handleReview}>
                <div className='grid gap-5 justify-center'>

                    <input name="name" type="text" defaultValue={user?.displayName || user?.name} placeholder="Name" className="input input-bordered input-success w-full  " />
                    <input name="photoURL" type="text" defaultValue={user?.photoURL} placeholder=" photoURL" className="input input-bordered input-success w-full  " />

                    <input name="email" type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-success w-full" readOnly />
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Choices" required></textarea>
                    <input className='btn btn-success text-white' type="submit" value="Review Done" />

                </div>

            </form>
        </div>
    );
};

export default AddReview;