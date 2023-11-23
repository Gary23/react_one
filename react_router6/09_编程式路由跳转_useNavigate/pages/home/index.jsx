import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
          </div>
          <div>
            <div>
              <Link to="news">news</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="message">message</Link>
            </div>
          </div>
          <br />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
