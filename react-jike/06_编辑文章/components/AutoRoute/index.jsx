import { storage } from '@/utils'
import { Navigate } from 'react-router-dom'
import { Fragment } from 'react'

const AutoRoute = ({ children }) => {
  const token = storage.get('token')
  return (
    <Fragment>
      { 
        token ? 
        children :
        <Navigate to="/login" />
      }
    </Fragment>
  )
}

export default AutoRoute