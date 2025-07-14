import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./Layoud/Layout";
import Login from "./login/Login";
import Auth from "../auth/Auth";

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);
};

export default MainRouter;
