import {createBrowserRouter} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("@/page/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
