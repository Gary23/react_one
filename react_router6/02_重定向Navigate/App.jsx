import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Demo from './pages/demo'

function App() {
  return (
    <div>
    <BrowserRouter>
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
        <Routes>
          <Route 
            path="/about"
            element={ <About /> }
          />
          {/* 不会重复渲染了 */}
          <Route 
            path="/about"
            element={ <About /> }
          />
          <Route 
            path="/home"
            element={ <Home /> }
          />
          <Route 
            path="/"
            element={ <Navigate to="/home" /> }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
