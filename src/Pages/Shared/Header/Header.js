import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Header = () => {

    const { user, googleProviderLogin, logOut } = useContext(AuthContext);
    //google authetication
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }
    const handleLogout = () => {
        logOut()
            .then()
            .catch();
    }

    const menu = <>
        <li className='font-bold text-xl text-success'><Link to='/'>Home</Link></li>
        <li className='font-bold text-xl text-success'><Link to='/allmenu'>Menu</Link></li>
        
        <li className='font-bold text-xl text-success'><Link to='/'>Catering</Link></li>       
        <li className='font-bold text-xl text-success'><Link to='/'> Parties&Events </Link></li>

        <li className='font-bold text-xl text-success'><Link to='/orders'>Orders</Link></li>
        <li className='font-bold text-xl text-success'><Link to='/'>Blogs</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-bold text-xl text-success'><Link to='/'>My Reviews</Link></li>
                    <li className='font-bold text-xl text-success'><Link to='/'>Add New Menu</Link></li>
                    <li className='font-bold text-xl text-success'><Link to='/'><button onClick={handleLogout}>Sign Out </button></Link></li>
                </> :

                <>
                    <li className='font-bold text-xl text-success'><Link to='/login'>Login</Link></li>
                    <li className='font-bold text-xl text-success'><Link to='/signup'>SignUp</Link></li>
                </>

        }

    </>
    return (
        <div>
            <h1 className='text-green-600 text-center text-4xl font-bold font-serif'> FOODIS CUISINE</h1>
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

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?

                            <li className='font-bold text-xl text-success'><Link to='/login'>{user?.displayName || user?.name} </Link></li>
                            :
                            <Link onClick={handleGoogleSignin} className="btn btn-outline btn-success text-white">
                                 <span className='text-warning'> < FaGoogle /></span>  &nbsp; 
                                 <span className='text-warning'> Sign in</span>
                                
                            </Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Header;