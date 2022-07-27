module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],module.exports = {
    // ...省略了其他
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
};
}
