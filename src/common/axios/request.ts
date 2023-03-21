import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showLoading, showErrorInfo, hideLoading } from '@/common/utils'
import qs from 'qs'

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  isThrowError?: boolean;
  loading?: boolean;
  isCancelRequest?: false;
}
interface MyAxiosResponse extends AxiosResponse {
  config: MyAxiosRequestConfig;
}
type TAxiosOption = {
  baseURL: string | undefined;
  timeout: any;
  isThrowError: boolean; // 是否抛出业务错误
  loading: boolean; // 是否展示loading
  isCancelRequest: boolean; // 是否可以取消请求
};
let requestNum = 0

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++
  if (requestNum === 1) showLoading()
}
const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--
  if (requestNum === 0) {
    toHideLoading()
  }
}
// 防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
function debounce(fn: () => void, wait: number) {
  let timer: any = null
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}
const toHideLoading = debounce(() => {
  hideLoading()
}, 300)

const pendingMap = new Map()
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config: MyAxiosRequestConfig) {
  const { url, method, params, data } = config
  return [url, method, qs.stringify(params), qs.stringify(data)].join('&')
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config: MyAxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}
/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config: MyAxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken: any | undefined = pendingMap.get(pendingKey)
    cancelToken()
    pendingMap.delete(pendingKey)
  }
}

const config: TAxiosOption = {
  baseURL: process.env.VUE_APP_ACTIVITY_SERVER_TARGET,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  isThrowError: false,
  loading: true,
  isCancelRequest: false
}

class Request {
  instance: AxiosInstance;
  constructor(config: TAxiosOption) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (requestConfig: MyAxiosRequestConfig) => {
        // 这里处理ajaxState
        // 这里处理PHP接口逻辑
        const { loading, isCancelRequest } = requestConfig
        if (isCancelRequest) {
          removePending(requestConfig)
          addPending(requestConfig)
        }
        if (loading) addLoading()
        if (
          requestConfig.headers?.['Content-Type'] ===
          'application/x-www-form-urlencoded'
        ) {
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
        const { loading = true, isCancelRequest } = responseData.config
        if (isCancelRequest) removePending(responseData.config)
        if (loading) cancelLoading()
        // 如果调用其他中台，此处需要单独对code做转化
        if (status === 200 && errcode === 0) {
          return Promise.resolve(data || res || {})
        } else {
          // 此处可以处理其他特殊的业务逻辑
          // 比如丢失登陆态，传参数有误等逻辑
          if (responseData.config.isThrowError) {
            return Promise.reject(res)
          }
          showErrorInfo(res && res.errstr)
          return Promise.reject(res)
        }
      },
      (error: any) => {
        if (!error.config) return Promise.reject(error)
        const { loading, isCancelRequest } = error.config
        isCancelRequest && removePending(error.config)
        loading && cancelLoading()
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
        if (error.config && error.config.isThrowError) {
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
