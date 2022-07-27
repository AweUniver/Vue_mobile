<template>
  <div></div>
</template>

<script>
import { getAllChannelsAPI } from './api'

export default {
  async created () {
    const res = await getAllChannelsAPI()
    console(res)
  }
}
</script>

<style></style>
