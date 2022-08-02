module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
     // ？？
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 可选链
    '@babel/plugin-proposal-optional-chaining',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
