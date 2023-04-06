export function tool(text) {
  let input = document.createElement('input')
  input.value = text
  input.readOnly = true
  document.body.appendChild(input)
  input.select()
  const result = document.execCommand('copy')
  if (result) {
    setTimeout(() => {
      document.body.removeChild(input)
      input = null
    }, 0)
    return true
  } else {
    const range = document.createRange()
    range.selectNode(input)
    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      setTimeout(() => {
        document.body.removeChild(input)
      }, 0)
      return true
    }
  }
  return false
}

export function setRgbTo16(str) {
  const reg = /^(rgb|RGB)/
  if (!reg.test(str)) {
    return
  }
  const arr = str.slice(4, str.length - 1).split(',')
  let color = '#'
  for (let i = 0; i < arr.length; i++) {
    let t = Number(arr[i]).toString(16)
    if (t === '0') {
      // 如果为“0”的话，需要补0操作,否则只有5位数
      t = t + '0'
    }
    color += t
  }
  return color
}

export function set16ToRgb(str) {
  const reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if (!reg.test(str)) {
    return
  }
  let newStr = str.toLowerCase().replace(/S#/g, '')
  const len = newStr.length
  if (len === 3) {
    let t = ''
    for (let i = 0; i < len; i++) {
      t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1))
    }
    newStr = t
  }
  const arr = [] // 将字符串分隔，两个两个的分隔
  for (let j = 0; j < 6; j += 2) {
    const s = newStr.slice(j, j + 2)
    arr.push(parseInt('0x' + s))
  }
  return 'rgb(' + arr.join(',') + ')'
}
