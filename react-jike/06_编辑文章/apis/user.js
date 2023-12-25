import { request } from '@/utils'

export const fetchUserInfoApi = () => {
  return request({
    method: 'GET',
    url: '/user/profile'
  })
}

export const fetchLoginApi = (data) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data,
  })
}