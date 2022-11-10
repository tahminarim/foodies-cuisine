import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMenu = () => {
    const { user } = useContext(AuthContext);
    const showToastMessage = () => {
        toast.success('Menu added successfully! !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const addMenu = event => {
        event.preventDefault();
        const form = event.target;
        const menu_name = form.menu.value;
        const email = user?.email || 'nonregistered';

        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const types =form.types.value;

        const menu = {
            email,
            menu_name,
            img,
            price,
            description,
            types
        }

        fetch('http://localhost:5000/addmenu', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(menu)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
        event.target.reset();

    }

    return (



        <div>

            <h1 className='text-xl text-center text-green-600 font-semibold mb-2'> Thanks { user?.name ||  user?.displayName} in advice for add a new menu  </h1>

            <form onSubmit={addMenu}>
                <div className='grid gap-5 justify-center'>

                    <input name="menu" type="text" placeholder="Menu Name" className="input input-bordered input-success w-full" required />
                    <input name="img" type="text" placeholder="Image URL" className="input input-bordered input-success w-full " required />

                    <input name="price" type="text" placeholder="Price" className="input input-bordered input-success w-full" />
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Description" ></textarea>

                    <input name="types" type="text" placeholder="How many types" className="input input-bordered input-success w-full" />




                    
                    <button onClick={showToastMessage}><input className='btn btn-success text-white' type="submit" value="Okay" /></button>
                    <ToastContainer />

                </div>

            </form>
        </div>




    );
};

export default AddMenu;