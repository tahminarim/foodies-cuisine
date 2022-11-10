import React, { useContext, useEffect, useState } from 'react';
import SingleMenu from './SingleMenu';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const AllMenu = () => {
    const [menus, setMenus] = useState([]);
    const {  loading } = useContext(AuthContext);



    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    if (loading) {
        return <>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div></>
    }
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