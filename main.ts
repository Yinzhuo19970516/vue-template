declare const APP_VITE_MODULE_PAGE: string

var style = document.createElement('style')
style.innerHTML ='* {margin: 0;padding: 0;}body{background-color:#607d8b;margin:40px;}'+
    'a{margin: 10px;display: inline-block;white-space: nowrap;cursor: pointer;color: #009688;background: #cfdeec;text-align: center;box-sizing: border-box;transition: .1s;font-weight: 500;padding: 12px 20px;font-size: 14px;border-radius: 4px;}' +
    'a:hover{background: #009688;color: #fff;}'
document.getElementsByTagName("head")[0].appendChild(style)
var str = Object.entries(APP_VITE_MODULE_PAGE).map(([key, value]) => {
    return `<a href="${value}/" target="_blank">${key}</a>`
}).join('')
document.querySelector('#app').innerHTML = `${str}`