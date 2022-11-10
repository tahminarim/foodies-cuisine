import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SingleMenu = ({ menu }) => {
  const { _id, img, description, price, menu_name } = menu;
  const {  loading } = useContext(AuthContext);
  if (loading) {
    return <>
        <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div></>
}
  return (
    <div className="hero mr-3 bg-base-200">
      <div className="hero-content flex-col lg:flex-col">

        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <img alt="dish" src={img} className="max-w-xs rounded-lg shadow-2xl" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className='grid'>
          <h1 className="text-5xl font-bold">{menu_name}</h1>
          <p className="py-6">{price}€ per person</p>

          {
            description.length > 150 ?
              <p> {description.slice(0, 100) + '...'}
              </p>
              :
              <p>{description}</p>
          }

          <div className='flex justify-between'>
            <Link to={`/allmenu/${_id}`}> <button className="btn  btn-outline btn-success m-2">See More </button></Link>
            <Link className='' to={`/checkout/${_id}`}> <button className="btn btn-success text-white m-2 ">Buy Now</button></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleMenu;