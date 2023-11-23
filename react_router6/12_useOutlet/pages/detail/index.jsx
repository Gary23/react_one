import React from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function Detail() {
  // useLocation的方式
  const { id, content } = useLocation().state

  console.log('useNavigationType', useNavigationType())

  return (
    <div>
      <div>id: { id }</div>
      <div>content: { content }</div>
    </div>
  )
}
