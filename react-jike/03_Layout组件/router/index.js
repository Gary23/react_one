import { useRoutes, Navigate } from "react-router-dom";
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import AutoRoute from '@/components/AutoRoute'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'

const routes = [
  {
    path: '/',
    element: <Navigate to="/layout" />,
  },
  {
    path: '/layout',
    element: <AutoRoute><Layout /></AutoRoute>,
    children: [
      {
        path: '',
        element: <Navigate to="home" replace={true} />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'article',
        element: <Article />,
      },
      {
        path: 'publish',
        element: <Publish />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export default function Router() {
  return useRoutes(routes);
}