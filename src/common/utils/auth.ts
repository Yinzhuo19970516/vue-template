import { CoreCookie } from './cookie'
const TokenKey = 'x-access-token'
const UserTypeKey = 'x-user-type'

export function getToken(): string {
  return CoreCookie.get(TokenKey) === null ? '' : (CoreCookie.get(TokenKey) as string)
}

export function setToken(token: string): void {
  CoreCookie.set(TokenKey, token, 7, '/')
}

export function setUserType(token: string | number): void {
  CoreCookie.set(UserTypeKey, token, 7, '/')
}

export function getUserType(): string {
  return CoreCookie.get(UserTypeKey) === null ? '' : (CoreCookie.get(UserTypeKey) as string)
}

export function removeToken(): void {
  CoreCookie.del(TokenKey, '/')
}

// 设置Cookie
export function setCookie(key: string, value: string): void {
  CoreCookie.set(key, value, 7, '/')
}

// 获取Cookie
export function getCookie(key: string): string | null {
  return CoreCookie.get(key)
}

// 删除Cookie
export function removeCookie(key: string): void {
  CoreCookie.del(key, '/')
}
