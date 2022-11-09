import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../component/page/Blog/Blog';
import Home from '../component/page/Home/Home';
import AllServices from '../component/page/Home/Services/AllServices';
import Services from '../component/page/Home/Services/Services';
import Login from '../component/page/Login/Login';
import Details from '../component/page/ServiceDetails/Details';
import SignUp from '../component/page/SignUp/SignUp';
import Main from '../Layout/Main';
import PrivateRoute from './PrivateRouter';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/',
                element:<Services></Services>
                
            },
            {
                path:'/services',
               
                element:<AllServices></AllServices>
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/service/:id',
                loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`),
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
        ]

    }
])

export default router;