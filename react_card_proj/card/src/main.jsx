// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/'
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>
);
