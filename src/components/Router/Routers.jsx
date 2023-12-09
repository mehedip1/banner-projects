import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Home/Home";
import Item from "../Pages/Item/Item";
import Login from "../Pages/Login/Login";
import Sign from "../Pages/Sign/Sign";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: 'item',
            element: <Item></Item>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'sign',
            element: <Sign></Sign>
        }
      ]
    },
  ]);