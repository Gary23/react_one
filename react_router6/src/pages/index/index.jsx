import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
            <div>
              <button onClick={ () => { navigate(1) } }>前进</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={ () => { navigate(-1) } }>后退</button>
              {/* <button onClick={ () => { console.log('useResolvePath', useResolvePath()) } }>查看路径</button> */}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/home">Home</NavLink>
              <NavLink className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;