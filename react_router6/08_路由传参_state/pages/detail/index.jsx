import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  // useLocation的方式
  const { id, content } = useLocation().state

  return (
    <div>
      <div>id: { id }</div>
      <div>content: { content }</div>
    </div>
  )
}
