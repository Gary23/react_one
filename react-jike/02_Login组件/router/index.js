import { useRoutes, Navigate } from "react-router-dom";
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import AutoRoute from '@/components/AutoRoute'

const routes = [
  {
    path: '/',
    element: <Navigate to="/layout" />,
  },
  {
    path: '/layout',
    element: <AutoRoute><Layout /></AutoRoute>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default function Router() {
  return useRoutes(routes);
}