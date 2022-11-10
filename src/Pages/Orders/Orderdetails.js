import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Orderdetails = ({ order }) => {
    const { _id, menuName, phone, customer } = order;
    const {user} = useContext(AuthContext);
    //console.log(_id);
    return (
        <tr className=''>

            <td>
                <div className="font-bold">{customer}</div>
            </td>
         

            <td>
                {menuName}

            </td>
            <td>
            <Link to={`/reviews/${_id}`}> <button className="btn btn-success text-white m-2 text-xs lg:text-xl lg:mt-2">Add Review</button></Link>
            
            </td>


        </tr>
    );
};

export default Orderdetails;