<template>
  <div class="headpage-header-view">
    <img class="main-logo" src="../assets/magnum.png"/>
  </div>
</template>

<script>
export default {
  name: 'HeadpageView'
}
</script>

<style lang="stylus" scoped>
.headpage-header-view
  padding-top: 50px
  height: 50vw
  max-height: 360px
  display: flex
  justify-content: center
  align-items: center
  .main-logo
    max-height: 120px
    max-width: 60%
</style>
