<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAllChannelsAPI } from './api'

export default {
  async created () {
    try {
      const res = await getAllChannelsAPI()
      console.log(res)
    } catch (err) {
      // console.dir 详细打印
      console.dir(err)
    }
  }
}
</script>

<style></style>
