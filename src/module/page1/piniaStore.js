import { defineStore } from 'pinia'

export const main = defineStore('main', {
  state: () => {
    return {
      test: 'hello word',
      test1: 'hello word1',
      configInfo: {}
    }
  }
})

export const test = defineStore('test', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})

export const test1 = defineStore('test1', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})

export const piniaStore = {
  main,
  test,
  test1
}
