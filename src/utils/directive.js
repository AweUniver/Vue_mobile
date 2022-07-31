// 对vue的全局指令进行封装
// 封装中间件函数插件
const directiveObj = {
  install (Vue) {
    Vue.directive('fofo', {
      inserted (el) {
        if (el.nodeName === 'TEXTAREA' || el.nodeName === 'INPUT') {
          el.focus()
        } else {
          const theInput = el.querySelector('input')
          const theTextArea = el.querySelector('textarea')
          if (theInput) {
            theInput.focus()
          }
          if (theTextArea) {
            theTextArea.focus()
          }
        }
      },
      update (el) {
        if (el.nodeName === 'TEXTAREA' || el.nodeName === 'INPUT') {
          el.focus()
        } else {
          const theInput = el.querySelector('input')
          const theTextArea = el.querySelector('textarea')
          if (theInput) {
            theInput.focus()
          }
          if (theTextArea) {
            theTextArea.focus()
          }
        }
      }
    })
  }
}

export default directiveObj
