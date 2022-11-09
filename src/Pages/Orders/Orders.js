import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Orderdetails from './Orderdetails';

const Orders = () => {
    const {user,logOut} = useContext(AuthContext);
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
            <h2 className="text-5xl text-center text-green-600 m-8">You have {orders.length} Orders</h2>
            <div className=" w-full">
                <table className="table w-full mt-8 ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Menu</th>
                            
                        </tr>
                    </thead>
                    <tbody>
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