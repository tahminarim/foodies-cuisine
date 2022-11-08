import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllMenu from "../../Pages/AllMenu/AllMenu";
import SingleMenu from "../../Pages/AllMenu/SingleMenu";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allmenu',
                element: <AllMenu></AllMenu>
            },
            {
                path: '/allmenu/:id',
                element: <SingleMenu></SingleMenu>
            },


        ]

    }
])
export default router;