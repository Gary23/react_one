import React from 'react'
import {useParams} from 'react-router-dom'

export default function Detail() {
  const { id, content } = useParams()
  // console.log(this.props.match)
  // const { id, title } = this.props.match.params
  return (
    <div>
      <div>id: { id }</div>
      <div>content: { content }</div>
    </div>
  )
}
