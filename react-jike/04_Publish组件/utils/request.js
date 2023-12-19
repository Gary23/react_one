import axios from 'axios';
import { storage } from '@/utils'

const http = axios.create({
  // 配置根域名
  baseURL: 'http://geek.itheima.net/v1_0',
  // 配置超时时间
  timeout: 60000
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 获取token
  const token = storage.get('token');
  // 注入请求头
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  
  
  return response;
}, function (error) {
  // 对响应错误做点什么

  // 在响应拦截监听401，token失效
  if (error.response.status === 401) {
    // 清除token
    storage.remove('token')
    // 用history跳转到登录页并清理之前的历史记录
    window.history.pushState(null, null, '/login')
    window.location.reload()
  }
  return Promise.reject(error);
});

export default http;