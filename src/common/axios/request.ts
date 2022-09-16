import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showLoading, showErrorInfo, hideLoading } from '@/common/utils'
import qs from 'qs'

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  slientError?: boolean
  loading?: boolean
}
interface MyAxiosResponse extends AxiosResponse {
  config: MyAxiosRequestConfig
}
type TAxiosOption = {
  baseURL: string | undefined
  timeout: any
  slientError: boolean
  loading: boolean
}
let requestNum = 0

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++
  if (requestNum === 1) showLoading()
}
const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--
  if (requestNum === 0) hideLoading()
}

const config: TAxiosOption = {
  baseURL: process.env.VUE_APP_ACTIVITY_SERVER_TARGET,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  slientError: false,
  loading: true
}
class Request {
  instance: AxiosInstance
  constructor(config: TAxiosOption) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (requestConfig: MyAxiosRequestConfig) => {
        // 这里处理ajaxState
        // 这里处理PHP接口逻辑
        console.log('requestConfig', requestConfig, config)
        const { loading = true } = requestConfig
        if (loading) addLoading()
        if (requestConfig.headers?.['Content-Type'] === 'application/x-www-form-urlencoded') {
          requestConfig.data = qs.stringify(requestConfig.data)
        }
        return requestConfig
      },
      (error: any) => {
        console.log('requestError', error)
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (responseData: MyAxiosResponse) => {
        const status = responseData.status
        const res = responseData.data
        const { data, errcode } = res
        const { loading = true } = responseData.config
        if (loading) cancelLoading()
        // 如果调用其他中台，此处需要单独对code做转化
        if (status === 200 && errcode === 0) {
          return Promise.resolve(data || res || {})
        } else {
          // 此处可以处理其他特殊的业务逻辑
          // 比如丢失登陆态，传参数有误等逻辑
          if (responseData.config.slientError) {
            return Promise.reject(res)
          }
          showErrorInfo(res.errstr)
          return Promise.reject(res)
        }
      },
      (error: any) => {
        const { loading = true } = error.config
        if (loading) cancelLoading()
        let errMsg
        if (error && error.response) {
          if (error.response.status >= 500 && error.response.status <= 599) {
            errMsg = '服务器繁忙，请稍后重试'
          } else if (error.response.status === 404) {
            errMsg = '服务不存在'
          } else {
            errMsg = '网络繁忙，请稍后重试'
          }
        } else {
          errMsg = '( ⊙ o ⊙ )啊！网络不太顺畅哦~'
        }
        if (error.config.slientError) {
          return Promise.reject(error)
        } else {
          showErrorInfo(errMsg)
        }
        return Promise.reject(errMsg)
      }
    )
  }

  get<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.get(url, { params: data, ...config })
  }

  post<T, U>(url: string, data?: U, config = {}): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export default new Request(config)
