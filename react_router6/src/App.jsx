import React from 'react';
import { BrowserRouter, NavLink, useRoutes } from 'react-router-dom';
import routes from './route'

const RoutesComponent = () => {
  // const routes = [
  //   {
  //     path: '/home',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/about',
  //     element: <About />,
  //   },
  //   {
  //     path: '/',
  //     element: <Navigate to="/home" replace />,
  //   },
  // ];

  const elements = useRoutes(routes);
  return elements;
};

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
        </div>
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;