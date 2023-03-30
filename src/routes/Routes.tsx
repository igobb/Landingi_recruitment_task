import React from "react";
import { useRoutes } from "react-router-dom";

const AllCartsPage = React.lazy(
  () => import("../pages/AllCartsPage/AllCartsPage")
);

const Routes = () => {
  return useRoutes([
    // { path: "*", element: <ErrorPage/>}
    { path: "/", element: <AllCartsPage /> },
  ]);
};

export default Routes;
