import { Toast } from 'vant'
// import 'vant/es/toast/style'

export const SUCCESS_CODE = '000000'
export const ACTIVITY_NO = '29571682bd3040bd800a4031c7fc9987'
export const PHP_SUCCESS_CODE = '200'

export function showLoading() {
  Toast({
    message: 'loading',
    forbidClick: true,
    type: 'loading'
  })
}
export function hideLoading() {
  Toast.clear()
}

export function showErrorInfo(msg: string) {
  Toast(msg && msg.toString())
}

export function formatTimeStr(date: any, fmt = 'yyyy-mm-dd') {
  if (date == null || date === '' || date === undefined) return null
  let ret, newDate
  try {
    // 解决ios手机时间格式化NAN问题
    if (typeof date === 'string' && date.indexOf('-') !== -1) {
      date = date.replace(/-/g, '/')
    }
    newDate = new Date(date)
  } catch (e) {
    newDate = date
  }
  const opt: any = {
    'Y+': newDate.getFullYear().toString(), // 年
    'm+': (newDate.getMonth() + 1).toString(), // 月
    'd+': newDate.getDate().toString(), // 日
    'H+': newDate.getHours().toString(), // 时
    'M+': newDate.getMinutes().toString(), // 分
    'S+': newDate.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  }
  return fmt
}
/**
 * 双位数字 小于10补0
 */
export function twodigit(val: number): string {
  return `0${val}`.slice(-2)
}

/**
 * 日期格式化
 */
export function dateFormats(date: number | string, format: string): string {
  let date1: any = date || new Date()
  if (date1.toString().length === 10) {
    date1 *= 1000
  }
  const data2 = new Date(date1)
  let str = format || 'yyyy-MM-dd HH:mm:ss'
  str = str.replace(/yyyy|YYYY/, data2.getFullYear().toString())
  str = str.replace(/yy|YY/, data2.getFullYear().toString().slice(-2))
  str = str.replace(/MM/, twodigit(data2.getMonth() + 1))
  str = str.replace(/M/g, (data2.getMonth() + 1).toString())
  str = str.replace(/dd|DD/, twodigit(data2.getDate()))
  str = str.replace(/d|D/g, data2.getDate().toString())
  str = str.replace(/hh|HH/, twodigit(data2.getHours()))
  str = str.replace(/h|H/g, data2.getHours().toString())
  str = str.replace(/mm/, twodigit(data2.getMinutes()))
  str = str.replace(/m/g, data2.getMinutes().toString())
  str = str.replace(/ss|SS/, twodigit(data2.getSeconds()))
  str = str.replace(/s|S/g, data2.getSeconds().toString())
  return str
}

export const regexpCommon = {
  // 验证码
  code: /^\d{6}$/,
  // 手机
  phone: /^1[3-9]\d{9}$/,
  // 身份证
  idCard: /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 银行卡
  bankCard: /^\d{14,19}$/,
  // 中文姓名包含少数民族
  userName: /^[\u4e00-\u9fa5]+((·|•)[\u4e00-\u9fa5]+)*$/,
  // 微信号
  wechat: /^[-_a-zA-Z0-9]{6,20}$/,
  // 座机号码
  seatNumber: /0\d{2,3}-\d{7,8}/,
  // 过滤表情
  emoticonPicture:
    // eslint-disable-next-line
    /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030|\s/gi
}

export function getQueryString(name: string): string {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return ''
}

function realType(i: any) {
  return Object.prototype.toString.call(i).slice(8, -1).toLowerCase()
}

export function addUrlQuery(url: string, query: any) {
  if (realType(query) === 'object') {
    let str = ''
    for (const key in query) {
      str += `${key}=${query[key]}&`
    }
    query = str.slice(0, -1)
  }
  if (/\?/.test(url.split('#')[0])) {
    return url.replace(/\?/, '$&' + query + '&')
  } else {
    return url.replace(/#|$/, '?' + query + '$&')
  }
}

export function parse(value: any) {
  let re = ''
  try {
    re = JSON.parse(value)
  } catch (err) {
    return value
  }
  return re
}
