import React from 'react'
import qs from 'querystring'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Detail() {
  // useLocation的方式
  const { search } = useLocation()
  let { id, content } = qs.parse(search.substr(1))

  // useSearchParams的方式
  const [ searchParams ] = useSearchParams()
  id = searchParams.get('id')
  content = searchParams.get('content')
  // setSearchParams(`?id=${id}&content=${content}`)

  return (
    <div>
      <div>id: { id }</div>
      <div>content: { content }</div>
    </div>
  )
}
