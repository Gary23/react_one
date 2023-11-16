import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [ sum, setSum ] = useState(0)
  function addSum() {
    setSum(sum + 1)
  }
  return (
    <div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
            {/* 这里只是为了说明，只要Navigate标签只要渲染，就会触发路由试图切换 */}
            <p>sum: { sum }</p>
            <button onClick={addSum}>sum+1</button>
            {
              sum === 2 && <Navigate to="/about" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
