import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../component/page/Blog/Blog';
import Home from '../component/page/Home/Home';
import AllServices from '../component/page/Home/Services/AllServices';
import Services from '../component/page/Home/Services/Services';
import Login from '../component/page/Login/Login';
import Details from '../component/page/ServiceDetails/Details';
import Main from '../Layout/Main';

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
                element: <Details></Details>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]

    }
])

export default router;