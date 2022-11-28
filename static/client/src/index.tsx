import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';
import Browse from './Browse';
import SearchView from './SearchView';
import SplashScreen from './SplashScreen';
import EditSong from './EditSong';
import reportWebVitals from './reportWebVitals';
import ConfigView from './ConfigView';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/search",
        element: <SearchView />,
      },
      {
        path: "/splash",
        element: <SplashScreen />,
      },
      {
        path: '/edit-song',
        element: <EditSong />,
      },
      {
        path: '/config',
        element: <ConfigView />,
      }
    ],
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
