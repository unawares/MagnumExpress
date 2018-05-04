<template>
  <div id="app">
    <router-view/>
    <div class="overlay" @click="onOverlayClick"></div>
  </div>
</template>

<script>
const EventEmitter = require('events')

export var overlayEventEmitter = new EventEmitter()

export var overlayMixin = {
  methods: {
    setOverlay (state) {
      var mainOverlay = document.querySelector('#app > .overlay')
      if (state) {
        document.body.classList.add('block-scroll')
        mainOverlay.classList.add('active')
      } else {
        document.body.classList.remove('block-scroll')
        mainOverlay.classList.remove('active')
      }
    }
  }
}

export default {
  name: 'App',
  methods: {
    onOverlayClick () {
      overlayEventEmitter.emit('click')
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  position: relative
  min-height: 100vh

body
  overflow: scroll

body.block-scroll
  overflow: hidden
  height: 100vh
  width: 100vw

.container
  width: 90%
  max-width: 1100px
  margin: auto

.overlay
  transition: all cubic-bezier(0.4, 0.0, 0.6, 1) 400ms
  position: absolute
  visibility: hidden
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: black
  opacity: 0
  &.active
    visibility: visible
    opacity: 0.4
</style>
