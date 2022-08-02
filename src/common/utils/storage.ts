import { parse } from '@/common/utils/index'

let hasSessionStorage = true
let hasLocalStorage = true
if (sessionStorage) {
  try {
    sessionStorage.setItem('_sessionStorageTest', 'Hello World!')
    sessionStorage.removeItem('_sessionStorageTest')
  } catch (e) {
    hasSessionStorage = false
  }
} else {
  hasSessionStorage = false
}

if (localStorage) {
  try {
    localStorage.setItem('_localStorageTest', 'Hello World!')
    localStorage.removeItem('_localStorageTest')
  } catch (e) {
    hasLocalStorage = false
  }
} else {
  hasLocalStorage = false
}
/**
 * 设置本地缓存
 * @param key
 * @param val
 */
export function setLocalStorage(key: string, val?: any): void {
  if (!hasLocalStorage) {
    return
  }
  localStorage.setItem(key, JSON.stringify(val))
}

/**
 * 获取本地缓存
 * @param key
 */
export function getLocalStorage(key: string): string | null {
  if (!hasLocalStorage) {
    alert('请关闭无痕（隐身）模式或者换个浏览器尝试打开')
    return ''
  }
  return parse(localStorage.getItem(key))
}
/**
 * 清除某项本地缓存
 * @param key
 */
export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key)
}

/**
 * 清空本地缓存
 */
export function clearLocalStorage(): void {
  localStorage.clear()
}

/**
 * 设置会话级别缓存
 * @param key
 * @param val
 */
export function setSessionStorage(key: string, val: any): void {
  if (!hasSessionStorage) {
    return
  }
  sessionStorage.setItem(key, JSON.stringify(val))
}

/**
 * 获取会话级别缓存
 * @param key
 */
export function getSessionStorage(key: string): string {
  if (!hasSessionStorage) {
    alert('请关闭无痕（隐身）模式或者换个浏览器尝试打开')
    return ''
  }
  return parse(sessionStorage.getItem(key))
}

/**
 * 清除某项会话级别缓存
 * @param key
 */
export function removeSession(key: string): void {
  sessionStorage.removeItem(key)
}

/**
 * 清空会话级别缓存
 */
export function clearSessionStorage(): void {
  sessionStorage.clear()
}
