import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import NewMenuDetails from './NewMenuDetails';

const UserAddedMenu = () => {
    const { user, logOut } = useContext(AuthContext);
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/addmenu?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setMenus(data);
            })
    }, [user?.email, logOut])
    return (
        <div className='m-5 '>
            <h1 className='text-green-600 text-3xl font-bold mt-9 text-font text-center'> ..............</h1>
            <h1 className='text-green-600 text-3xl font-bold mt-9 text-font text-center'> Your Added Menu</h1>
           
            <div>
                {
                    menus.map(menu => <NewMenuDetails
                        key={menu._id}
                        menu={menu}
                    ></NewMenuDetails>)
                }
            </div>
        </div>
    );
};

export default UserAddedMenu;