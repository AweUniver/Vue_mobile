<template>
  <div>
    <keep-alive exclude="SearchResult,Search,Detail,UserEdit">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
