import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import { useLocation, useNavigate } from 'react-router-dom'; import { Helmet } from 'react-helmet';
;

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email,password);
    login(email, password)
      .then(result => {
        const user = result.user;
        console.log('user login', user)
        const presentUser = {
          email: user.email
        }
        // get jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(presentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('foodies-token', data.token);
           // navigate(from, { replace: true });
          });

      })
      .catch(err => console.log(err));
    navigate(from, { replace: true });

  }
  return (
    <div className="hero max-screen bg-base-100 mt-9">
      <Helmet>
        <title>Login | Foodies Cuisin</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-600">Login now!</h1>
          <p className="py-6 text-green-500"> To enjoy your today's meal </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text mt-9">Email</span>
              </label>
              <input type="text" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text mt-9">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />
              <label className="label mt-9">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success text-white" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center'>New to FoodiesCuisine ?<Link className='text-green-600 font-bold' to="/signup">Sign Up</Link> </p>
        </div>
      </div>
    </div>

  );
};

export default Login;