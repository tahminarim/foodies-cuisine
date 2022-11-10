import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleMenu from '../AllMenu/SingleMenu';
import Banner from './Banner/Banner';
import './Home'
import UserAddedMenu from './UserAddedMenu/UserAddedMenu';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-tahminarim.vercel.app/threemenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div className=' mt-5 w-full  '>
            <Helmet>
                <title> Home| Foodies Cuisine</title>
            </Helmet>
            <div className='lg:ml-28'>
                <Banner></Banner>
            </div>
            <div >
                <div className='text-green-600 font-semibold text-center m-5 p-2'>
                    <h1 className=' text-3xl '> You can customize your own food with us !</h1>
                    <p className=' text-xl '> Hurry up !!!!</p>
                </div>
                <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        menus.map(menu => <SingleMenu
                            key={menu._id}
                            menu={menu}
                        ></SingleMenu>)
                    }
                </div>
                <div className='grid justify-center mt-8'>
                    <Link to='/allmenu' > <button className='btn btn-success btn-wide text-2xl text-white'>See All Menu</button></Link>

                </div>

            </div>

            <div>
                <UserAddedMenu></UserAddedMenu>
            </div>
        </div>
    );
};

export default Home;