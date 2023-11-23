import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const navigate = useNavigate()

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

  function linkTo(data) {
    navigate('detail', {
      state: {
        id: data.id,
        content: data.content,
      }
    })
  }

  return (
    <div>
      <div>
        <ul>
          {
            details.map(item => {
              return (
                <li key={item.id}>
                  <p style={{cursor: 'pointer'}} onClick={ () => { linkTo(item) } }>{item.title}</p>
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
