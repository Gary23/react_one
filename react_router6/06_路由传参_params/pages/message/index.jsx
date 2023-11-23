import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [ details ] = useState([
    {
      id: '001',
      title: '001标题',
      content: '消息001的内容0001'
    },
    {
      id: '002',
      title: '002标题',
      content: '消息002的内容0002'
    },
    {
      id: '003',
      title: '003标题',
      content: '消息003的内容0003'
    },
  ])

  return (
    <div>
      <div>
        <ul>
          {
            details.map(item => {
              return (
                <li key={item.id}>
                  <Link to={`/home/message/detail/${item.id}/${item.content}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <br />
      <Outlet />
    </div>
  )
}
