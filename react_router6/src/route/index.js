import { Navigate } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'

export default [
  {
    path: '/',
    element: <Navigate to="home" />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
]