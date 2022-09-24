import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages";
import Error from "./pages/error";
import Home from "./pages/home";
import Github from "./pages/github";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Movie from "./pages/movie";

import 'normalize.css';
import './iconfont.css';
import './index.css';

const router = createBrowserRouter([{
    path: '/',
    element: <Index/>,
    errorElement: <Error/>,
    children: [{
        path: '/',
        element: <Home/>
    }, {
        path: 'contact',
        element: <Contact/>
    }, {
        path: 'movie',
        element: <Movie/>
    }, {
        path: 'blog',
        element: <Blog/>
    }, {
        path: 'github',
        element: <Github/>
    }]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
