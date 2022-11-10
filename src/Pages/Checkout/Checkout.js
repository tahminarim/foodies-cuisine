import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, menu_name, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'nonregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const orderList = {
            menu: _id,
            menuName: menu_name,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err));

        event.target.reset();
    }

    return (
        <div className='text-center'>
            <h1 className='text-3xl text-green-600 font-extrabold m-5'> {menu_name}</h1>
            <div className='grid lg:flex justify-center items-center'>
                <div>
                    <img alt="" src={img} className="w-full lg:w-3/4  border rounded-3xl" />

                </div>

                <div>
                    <div>
                        <h1 className='text-xl text-green-600 font-semibold mb-2'> You are about to pay {price}€ for {menu_name} </h1>
                    </div>
                    <form onSubmit={handleOrder}>
                        <div className='grid gap-5 justify-center'>

                            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-success w-full  " />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-success w-full  " />
                            <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered input-success w-full  " />
                            <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-success w-full  " />

                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Choices" required></textarea>

                        <input className='btn btn-success' type="submit" value="Place the order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;