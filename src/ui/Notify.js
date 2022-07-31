// 基于vant二次封装
// import { Notify } from 'vant'
// export default Notify

import { Toast } from 'vant'
export default ({ type, message }) => {
  if (type === 'danger') {
    type = 'fail'
  }
  Toast({
    type,
    message
  })
}
