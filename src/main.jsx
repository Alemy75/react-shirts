import React from 'react'
import App from './App'
import './scss/main.scss'
import * as ReactDOM from "react-dom";
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Router/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
