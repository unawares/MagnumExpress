<template>
  <div class="main-view">
    <header-component></header-component>
    <router-view :width="width" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'MainView',
  data () {
    return {
      width: 0
    }
  },
  components: {
    HeaderComponent
  },
  created () {
    this.width = document.body.offsetWidth
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (event) {
      this.width = document.body.offsetWidth
    }
  }
}
</script>

<style lang="stylus">
</style>
