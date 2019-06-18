//引入axios
import axios from 'axios'
import qs from 'qs'
import router from '../router'
import store from '../store'
import {Toast} from 'vant';
import config from '../config'


let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.resolve(err.response)
})

//设置默认请求头
axios.defaults.headers = {
  //   'X-Requested-With': 'XMLHttpRequest'
  // 'Content-Type': 'application/json'
  'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.timeout = 10000
export default {
  //get请求
  get(url, param, isNoLoading) {
    !isNoLoading && store.dispatch('_openLoading')
    param.web_from = config.web_from
    param.token = store.state.token
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res.data.code == '-403') {
          router.push({path: '/login'})
          return false
        }
        if (res.data.code != 200) Toast(res.data.data);
        resolve(res.data)
      }).catch(err => {
        reject(err)
      }).finally(() => {
        store.dispatch('_closeLoading') //关闭loading
      })
    })
  },
  //post请求
  post(url, param, isNoLoading) {
    !isNoLoading && store.dispatch('_openLoading')
    param.web_from = config.web_from
    param.token = store.state.token

    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(Object.assign({}, param)),
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        if (res.data.code == '-403') {
          router.push({path: '/login'})
          return false
        }

        if (res.data.code != 200) Toast(res.data.data);
        resolve(res.data)
      }).catch(err => {
        reject(err)
      }).finally(() => {
        store.dispatch('_closeLoading') //关闭loading
      })
    })
  }
}
