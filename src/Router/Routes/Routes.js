import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllMenu from "../../Pages/AllMenu/AllMenu";
import MenuDetails from "../../Pages/AllMenu/MenuDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/Signup/Signup";
import Histories from "../../Pages/Histories/Histories";
import AddReview from "../../Pages/Reviews/AddReview";
import MyReviews from "../../Pages/Reviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog";
import Catering from "../../Pages/Catering/Catering";
import Event from "../../Pages/Event/Event";
import AddMenu from "../../Pages/AddMenu/AddMenu";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/catering',
                element: <Catering></Catering>
            },
            {
                path: '/event',
                element: <Event></Event>
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
                path: '/histories',
                element: <Histories></Histories>
            },
            {
                path: '/threemenu',
                element: <AllMenu></AllMenu>
            },
            {
                path: '/allmenu/:id',
                element: <MenuDetails> </MenuDetails>,
                loader: ({params})=>fetch(`https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params})=>fetch(`https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu/${params.id}`)
            },
            {
                path: '/addmenu',
                element: <AddMenu></AddMenu>,
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><AddReview> </AddReview></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            

            },

            {
                path: '/orders',
                element: <PrivateRoute> <Orders></Orders></PrivateRoute>,

                //loader: ({params})=>fetch(`https://b6a11-service-review-server-side-tahminarim.vercel.app/allmenu/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews> </MyReviews></PrivateRoute>,

            },
        ]

    }
])
export default router;