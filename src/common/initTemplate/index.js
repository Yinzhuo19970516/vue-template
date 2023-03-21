#!/usr/bin/env node
console.log('您正在创建项目')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const stat = fs.stat
const targetDir = path.resolve(__dirname, './template')

const copyFile = (targetDir, resultDir) => {
  // 读取文件、目录
  fs.readdir(targetDir, function (err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function (p) {
      const target = path.join(targetDir, '/', p)
      const res = path.join(resultDir, '/', p)
      let read
      let write
      stat(target, function (err, statsDta) {
        if (err) {
          throw err
        }
        if (statsDta.isFile()) {
          read = fs.createReadStream(target)
          write = fs.createWriteStream(res)
          read.pipe(write)
        } else if (statsDta.isDirectory()) {
          fs.mkdir(res, function () {
            copyFile(target, res)
          })
        }
      })
    })
  })
}

const question = [
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称：'
  }
]

const createProject = () => {
  // 询问用户问题
  inquirer
    .prompt(question)
    .then(({ name }) => {
      // name 为输入的项目名称
      name = name.trim()
      if (!name) {
        console.log('项目目录不能为空')
        // 如果输入空，继续询问
        createProject()
        return false
      }
      // 目标路径，要放在module目录下
      const resultDir = path.resolve(__dirname, '../../module/', name)
      // fs.access()方法用于测试文件是否存在
      fs.access(resultDir, function (err) {
        if (err) {
          // 创建文件
          fs.mkdir(resultDir, function (err) {
            if (err) {
              throw err
            }
            // 复制模版文件
            copyFile(targetDir, resultDir)
          })
          console.log(`${name} 项目已创建成功`)
        } else {
          console.log(`${name} 项目目录已存在，请输入其他名称`)
          // 不存在，继续询问
          createProject()
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
createProject()
