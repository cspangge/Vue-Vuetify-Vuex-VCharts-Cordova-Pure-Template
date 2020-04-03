'use strict'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || '',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest', // 会导致跨域
    /*
    跨域： 总结就是一句话，下面的字段别乱加
    （1) 请求方法是以下三种方法之一：HEAD   GET   POST
    （2）HTTP的头信息不超出以下几种字段：
      Accept
      Accept-Language
      Content-Language
      Last-Event-ID
      Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
     */
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  crossDomain: true, // 好像新版本axios没有这个配置了
  responseType: 'json', // default
  responseEncoding: 'utf8' // default
}

const _axios = axios.create(config)

// Add a request interceptor
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 在这里加入cookie检查来确保页面请求的时候用户是合法有效的登录状态
    // Loading动画也在这里启动
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    // Do something with response error
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          console.log('Bad Request')
          break
        case 401:
          console.log('Unauthorized')
          break
        case 403:
          console.log('Forbidden')
          break
        case 404:
          console.log('Not Found')
          break
        case 405:
          console.log('Method Not Allowed')
          break
        case 406:
          console.log('Not Acceptable')
          break
        case 408:
          console.log('Request Timeout')
          break
        case 500:
          console.log('Internal Server Error')
          break
        case 501:
          console.log('Not Implemented')
          break
        case 502:
          console.log('Bad Gateway')
          break
        case 503:
          console.log('Service Unavailable')
          break
        case 504:
          console.log('Gateway Time-out')
          break
        case 505:
          console.log('HTTP Version not supported')
          break
        default:
          console.log('Unexpected Error')
          break
      }
      return Promise.reject(error)
    }
  }
)

const AxiosPlugin = {
  install (Vue: any, options: any) {
    // 1. add global method or property
    Vue.axios = _axios
    // 2. add an instance method: get
    Vue.prototype.$get = function (url: any, params: any) {
      return new Promise((resolve, reject) => {
        _axios.get(url, {
          params: params
        }).then(res => {
          resolve(res.data)
        })['catch'](err => {
          reject(err.data)
        })
      })
    }
    // 2. add an instance method: post
    Vue.prototype.$post = function (url: any, params: any) {
      return new Promise((resolve, reject) => {
        _axios.post(url, qs.stringify(params)).then(res => {
          resolve(res.data)
        })['catch'](err => {
          reject(err.data)
        })
      })
    }
  }
}

Vue.use(AxiosPlugin)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AxiosPlugin)
}

export default AxiosPlugin
