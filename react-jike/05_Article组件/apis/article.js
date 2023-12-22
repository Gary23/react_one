import { request } from '@/utils'

export const fetchCreeateArticlesApi = (data) => {
  return request({
    method: 'POST',
    url: '/mp/articles?draft=true',
    data,
  })
}

export const fetchChannelsApi = () => {
  return request({
    method: 'GET',
    url: '/channels',
  })
}

export const getArticleListAPI = (params = {}) => {
  return request({
    method: 'GET',
    url: '/mp/articles',
    params,
  })
}
export const delArticleAPI = (id) => {
  return request({
    method: 'DELETE',
    url: `/mp/articles/${id}`,
  })
}