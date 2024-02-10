import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './ErrorPage.jsx';

import { createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Orders from './pages/Orders.jsx';
import SilasPage from './pages/SilasPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: <Orders/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/silaspage",
    element: <SilasPage/>,
    errorElement: <ErrorPage />,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
