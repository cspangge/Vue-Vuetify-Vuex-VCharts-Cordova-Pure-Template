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
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  crossDomain: true, // 好像新版本axios没有这个配置了
  responseType: 'json', // default
  responseEncoding: 'utf8', // default
}

const _axios = axios.create(config)

// Add a request interceptor
_axios.interceptors.request.use(
  // tslint:disable-next-line:no-shadowed-variable
  (config) => {
    // Do something before request is sent
    // 在这里加入cookie检查来确保页面请求的时候用户是合法有效的登录状态
    // Loading动画也在这里启动
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // Do something with response error
    if (error.response.status) {
      return Promise.reject(error)
    }
  }
)

const AxiosPlugin = {
  // tslint:disable-next-line:no-shadowed-variable
  install(Vue: any) {
    // 1. add global method or property
    Vue.axios = _axios
    // 2. add an instance method: get
    Vue.prototype.$get = (url: any, params: any) => {
      return new Promise((resolve, reject) => {
        _axios.get(url, {
          params,
        }).then((res) => {
          resolve(res.data)
        }).catch((err) => {
          reject(err.data)
        })
      })
    }
    // 2. add an instance method: post
    Vue.prototype.$post = (url: any, params: any) => {
      return new Promise((resolve, reject) => {
        _axios.post(url, qs.stringify(params)).then((res) => {
          resolve(res.data)
        }).catch((err) => {
          reject(err.data)
        })
      })
    }
  },
}

Vue.use(AxiosPlugin)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AxiosPlugin)
}

export default AxiosPlugin
