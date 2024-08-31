import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/about",
    element:<About/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)