import { useRoutes, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import AutoRoute from '@/components/AutoRoute'
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

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
        element: <Suspense fallback={'加载中'}><Home /></Suspense>,
      },
      {
        path: 'article',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>,
      },
      {
        path: 'publish',
        element: <Suspense fallback={'加载中'}><Publish /></Suspense>,
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