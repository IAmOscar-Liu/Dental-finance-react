import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Favorites from './page/Favorite';
import Home from './page/Home';
import Root from './page/Root';
import Finance from './page/Finance';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      index: true,
      element: <Home />
    }, {
      path: "favorites",
      element: <Favorites />
    },
    {
      path: "finance",
      element: <Finance />
    }
  ]
}])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

