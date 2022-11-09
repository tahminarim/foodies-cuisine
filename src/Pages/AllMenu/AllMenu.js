import React, { useEffect, useState } from 'react';
import SingleMenu from './SingleMenu';

const AllMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allmenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold text-green-500">Our Menu List </h2>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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