import { request } from '@/utils'

export const fetchCreeateArticlesApi = (data) => {
  return request({
    method: 'POST',
    url: '/mp/articles?draft=true',
    data,
  })
}

export const fetchChannelsApi = (data) => {
  return request({
    method: 'GET',
    url: '/channels',
    data,
  })
}