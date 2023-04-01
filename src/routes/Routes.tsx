import React from "react";
import { useRoutes } from "react-router-dom";

const AllCartsPage = React.lazy(
  () => import("../pages/AllCartsPage/AllCartsPage")
);

const AddCartPage = React.lazy(() => import("../pages/AddCartPage/AddCartPage"));
const DeleteCartPage = React.lazy(() => import("../pages/DeleteCartPage/DeleteCartPage"));

const Routes = () => {
  return useRoutes([
    // { path: "*", element: <ErrorPage/>}
    { path: "/", element: <AllCartsPage /> },
    { path: "/addCart", element: <AddCartPage /> },
    { path: "/deleteCart", element: <DeleteCartPage /> },

  ]);
};

export default Routes;
