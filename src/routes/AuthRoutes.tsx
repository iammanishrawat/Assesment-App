import { lazy } from "react";
import { Loadable, MinimalLayout } from "components";

const AuthLogin = Loadable(lazy(() => import("pages/auth/login")));
const Error404 = Loadable(lazy(() => import("pages/auth/error")));

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <AuthLogin />,
    },
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "error",
      element: <Error404 />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ],
};

export default LoginRoutes;
