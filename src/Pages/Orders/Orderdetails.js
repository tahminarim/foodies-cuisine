import React from 'react';

const Orderdetails = ({ order }) => {
    const { _id, menuName, phone, customer } = order;
    console.log(_id);
    return (
        <tr className=''>

            <td>
                <div className="font-bold">{customer}</div>
            </td>
            <td>
                <div className="text-sm opacity-50">{phone}</div>
            </td>

            <td>
                {menuName}

            </td>


        </tr>
    );
};

export default Orderdetails;