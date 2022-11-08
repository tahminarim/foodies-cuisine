import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Header = () => {
    const menu = <>
        <li className='font-bold text-xl text-success'><Link to='/'>Home</Link></li>
        <li className='font-bold text-xl text-success'><Link to='/'>Menu</Link></li>
        <li className='font-bold text-xl text-success'><Link to='/'>Catering</Link></li>
        <li className='font-bold text-xl text-success'><Link to='/'>Parties&Events</Link></li>

        <li className='font-bold text-xl text-success'><Link to='/'>Blogs</Link></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to="/" className="">
                    <img alt='' src={logo} />
                </Link>
                <h1 className='text-success text-3xl font-bold font-serif'> FOODIS<br/>CUISINE</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-success text-white">Get started</Link>
            </div>
        </div>
    );
};

export default Header;