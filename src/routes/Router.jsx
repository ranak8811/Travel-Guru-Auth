import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/details",
    element: (
      <PrivateRouter>
        <DetailsPage></DetailsPage>,
      </PrivateRouter>
    ),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
