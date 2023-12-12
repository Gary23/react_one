import { useRoutes, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import New from "../pages/New";
import Year from "../pages/Year";
import Month from "../pages/Month";

const routes = [
  {
    path: "/",
    element: <Navigate to="layout/month" />,
  },
  {
    path: "layout",
    element: <Layout />,
    children: [
      {
        path: 'month',
        element: <Month />,
      },
      {
        path: 'year',
        element: <Year />,
      },
    ]
  },
  {
    path: "new",
    element: <New />,
  },
]

export default function Router() {
  return useRoutes(routes);
}