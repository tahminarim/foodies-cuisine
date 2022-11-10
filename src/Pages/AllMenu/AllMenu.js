import React, { useEffect, useState } from 'react';
import SingleMenu from './SingleMenu';
import { Helmet } from 'react-helmet';

const AllMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div className=''>
            <Helmet>
                <title>Menu | Foodis Cuisine</title>
            </Helmet>
            <div className='text-center mb-4 '>
                <h2 className="text-5xl font-semibold text-green-500">Our Menu List </h2>

            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    menus.map(menu => <SingleMenu
                        key={menu._id}
                        menu={menu}
                    ></SingleMenu>)
                }
            </div>

        </div>
    );
};

export default AllMenu;