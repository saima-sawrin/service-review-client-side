import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../component/page/Blog/Blog';
import Home from '../component/page/Home/Home';
import Services from '../component/page/Home/Services/Services';
import SignIn from '../component/page/Login/Login';
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]

    }
])

export default router;