import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './components/Welcome/Welcome';
import TranslateText from './components/Translate/TranslateText';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';

const routes = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/translate',
    element: <TranslateText className="component" />,
  },
];
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
