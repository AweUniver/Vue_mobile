module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],

  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'vant'
    ]
  ]
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...other loaders
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              red: '#03a9f4',
              blue: '#3eaf7c',
              orange: '#f08d49',
              'text-color': '#111'
            }
          }
        }
      ]
    }
  ]
}
