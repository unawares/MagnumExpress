<template>
  <div class="main-view">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'MainView',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="stylus">
</style>
