import { useRoutes, Navigate } from "react-router-dom";
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

const routes = [
  {
    path: '/',
    element: <Navigate to="/Layout" />,
  },
  {
    path: '/Layout',
    element: <Layout />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
]

export default function Router() {
  return useRoutes(routes);
}