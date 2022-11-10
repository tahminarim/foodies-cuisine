import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    //const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
      fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

   const {createUser} = useContext(AuthContext);

    const handleSignup = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password= event.target.password.value;
        const  photoURL= event.target.photoURL.value;
        const user = { name, email,password, photoURL };
       // console.log(user);
    
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            const newUsers = [...users, data];
            setUsers(newUsers);
          })
          .catch(err => console.error(err))
    
          createUser(email,password)
          .then(result=>{
              const user=result.user
              console.log('find user',user);   
          })
          .catch(err=> console.log(err))
        
        event.target.reset();
        navigate(from, { replace: true });
      }
    

    
    return (
        <div className="hero w-full my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-green-600">Sign Up now!</h1>
                <p className="py-6 text-green-500"> To order your today's meal </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input   type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input   type="photoURL" name='photoURL' placeholder="photoURL" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input   type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input   type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-success text-white" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-green-600 font-bold' to="/login">Login</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Signup;