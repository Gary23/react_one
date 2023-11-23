import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import News from '../pages/news'
import Message from '../pages/message'
import Detail from '../pages/detail'

const routes = [
  {
    path: '/',
    element: <Navigate to="home" />
  },
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail',
            element: <Detail />,
          }
        ]
      },
    ]
  },
  {
    path: 'about',
    element: <About />
  }
]

export default function RoutesComponent() {
  return useRoutes(routes);
};