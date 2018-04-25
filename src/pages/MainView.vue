<template>
  <div class="main-view">
    <header-component></header-component>
    <div style="height: 1800px">
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'MainView',
  data () {
    return {
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
