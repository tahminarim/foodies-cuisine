import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Orderdetails from './Orderdetails';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-tahminarim.vercel.app/orders?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, logOut])

    return (
        <div>
            <Helmet>
                <title>Orders| Foodies Cuisin</title>
            </Helmet>
            <div className='grid grid-cols-1 justify-center'>
                <h2 className="text-5xl text-center text-green-600 m-8">You have ordered {orders.length} menu </h2>
                <Link to={`/allmenu`} className="btn  btn-outline btn-success m-2"> Add Orders </Link>

            </div>
            <div className=" w-1/2 lg:w-full ">
                <table className="table sm:table-fixed lg:w-full lg:m-1 mt-8 ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Menu</th>
                            <th>AddReview</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map(order => <Orderdetails
                                key={order._id}
                                order={order}
                            ></Orderdetails>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Orders;