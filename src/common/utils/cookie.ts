const _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? (obj: unknown) => typeof obj
    : (obj: any) => {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }
const Core = {
  Cookie: {
    set(
      name: string,
      value: string | number,
      days?: number | string,
      path?: string,
      domain?: string,
      secure?: string
    ): void {
      let expires: unknown
      if (days && Core.Object.isNumber(days)) {
        const date = new Date()
        date.setTime(date.getTime() + (days as number) * 24 * 60 * 60 * 1000)
        expires = date.toUTCString()
      } else if (Core.Object.isString(days)) {
        expires = days
      } else {
        expires = false
      }
      document.cookie =
        name +
        '=' +
        encodeURIComponent(value) +
        (expires ? ';expires=' + expires : '') +
        (path ? ';path=' + path : '') +
        (domain ? ';domain=' + domain : '') +
        (secure ? ';secure' : '')
    },
    get(name: string): string | null {
      const nameEQ = name + '='
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) === 0) {
          return decodeURIComponent(c.substring(nameEQ.length, c.length))
        }
      }
      return null
    },
    del(name: string, path?: string, domain?: string, secure?: string): void {
      this.set(name, '', -1, path, domain, secure)
    }
  },
  Object: {
    isUndefined(object: unknown): boolean {
      return typeof object === 'undefined'
    },
    isBoolean(object: unknown): boolean {
      return typeof object === 'boolean'
    },
    isString(object: unknown): boolean {
      return typeof object === 'string'
    },
    isElement(object: any): boolean {
      return object && object.nodeType === 1
    },
    isFunction(object: unknown): boolean {
      return typeof object === 'function'
    },
    isObject(object: any): boolean {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object'
    },
    isArray(object: unknown): boolean {
      return Object.prototype.toString.call(object) === '[object Array]'
    },
    isNumber(object: unknown): boolean {
      return typeof object === 'number'
    },
    /**
     * 将对象或数组转化为URL Query字符串
     * @function
     * @name Core.Object.toQueryString
     * @grammar Core.Object.toQueryString(source[, keyname])
     * @param {Object|Array} source 需要转化的对象或数组
     * @param {String} [keyname] 当source为数组时，参数keyname用于替代数组的下标
     *
     * @returns {String} URL查询串
     */
    toQueryString: function toQueryString(source: any, keyname: string) {
      const _this = this
      const result: string[] = []
      Object.keys(source).forEach(function (v) {
        const item = source[v]
        if (_this.isFunction(item)) return
        if (_this.isObject(item)) {
          result.push(_this.toQueryString(item, v))
        } else {
          if (/^\d+$/.test(v)) {
            // ? v is num
            result.push(encodeURIComponent(keyname || v) + '=' + encodeURIComponent(item))
          } else {
            result.push(encodeURIComponent(v) + '=' + encodeURIComponent(item))
          }
        }
      })
      return result.join('&')
    }
  }
}

export const CoreCookie = Core.Cookie
export const CoreObject = Core.Object
