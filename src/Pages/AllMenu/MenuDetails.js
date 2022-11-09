import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MenuDetails = () => {
    const {menu_name} = useLoaderData();

    return (
        <div>
            <h1> {menu_name}</h1>
        </div>
    );
};

export default MenuDetails;