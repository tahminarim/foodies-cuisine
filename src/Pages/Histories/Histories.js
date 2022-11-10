import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Reviews from '../Reviews/Reviews';
import History from './History';

const Histories = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])


    return (
        <div className='grid gap-4 grid-cols-2'>
            <Helmet>
                <title>Histories| Foodies Cuisine</title>
            </Helmet>
            <div className='grid gap-2 grid-cols-1  '>
                {
                    menus.map(menu => <History
                        key={menu._id}
                        menu={menu}
                    ></History>)
                }
            </div>
            <div>

                <Reviews></Reviews>


            </div>
        </div>
    );
};

export default Histories;