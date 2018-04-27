<template>
  <div class="header-component">
    <div class="toolbar">
      <div class="toolbar-wrapper">
        <div class="container actions">
          <button class="button responsive" :class="{ active: menu }" @click="menu = !menu">
            <img class="icon" height="45px" width="45px" src="../assets/icons/burger.svg"/>
            <span class="text">Меню</span>
          </button>
          <div class="spacer"></div>
          <button class="button">
            <img class="icon" height="45px" width="45px" src="../assets/icons/user.svg"/>
          </button>
        </div>
      </div>
      <div class="cart-button">
        <img class="icon" height="56px" width="56px" src="../assets/icons/cart.svg"/>
      </div>
    </div>
    <div class="menu" :class="{ active: menu }">
      <div class="container">
        <ul class="ul-menu">
          <li class="li-action">
            <span class="button">АКЦИИ</span>
          </li>
          <li class="li-action">
            <span class="button">ПОКУПАТЕЛЯМ</span>
          </li>
          <li class="li-action">
            <span class="button">О КОМПАНИИ</span>
          </li>
          <li class="li-action">
            <span class="button">ОТЫЗЫ И ПРЕДЛОЖЕНИЯ</span>
          </li>
          <li class="li-action">
            <span class="button">КОНТАКТЫ</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { overlayMixin } from '@/App'

export default {
  name: 'HeaderComponent',
  mixins: [overlayMixin],
  data () {
    return {
      menu: false
    }
  },
  watch: {
    menu (v) {
      this.setOverlay(v)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@keyframes delayedShow
  to
    opacity: 1

.toolbar
  z-index: 100
  height: 50px
  position: fixed
  top: 0
  width: 100%
  .toolbar-wrapper
    height: 100%
    width: 100%
    position: relative
    overflow: hidden
    &:before
      content: ''
      position: absolute
      bottom: 0
      left: 50%
      width: 72px
      height: 72px
      transform: translate(-50%, 50%)
      border: 99999px solid #AD1456
      border-radius: 50%
    .container.actions
      display: flex
      align-items: center
      top: 0
      left: 0
      bottom: 0
      right: 0
      position: absolute
      color: white
      button
        background: none
        color: inherit
        border: none
        padding: 0
        font: inherit
        cursor: pointer
        outline: inherit
      .button
        height: 100%
        padding-left: 16px
        padding-right: 16px
        display: inline-flex
        align-items: center
        .text
          margin-top: 2px
          padding-left: 16px
          padding-right: 16px
        &.active
          background-color: #9B0E51
        &:hover
          background-color: #91034E
        @media screen and (max-width: 600px)
          .text
            display: none
      .spacer
        flex-grow: 1
  .cart-button
    cursor: pointer
    width: 64px
    height: 64px
    background-color: #AD1456
    position: absolute
    left: 50%
    transform: translate(-50%, -50%)
    border-radius: 50%
    display: inline-flex
    justify-content: center
    align-items: center
    .icon
      transform: translate(-2.5px, 1px)
    &:hover
      background-color: #91034E

.menu
  top: 0
  color: white
  background-color: #9B0E51
  z-index: 99
  position: fixed
  width: 100%
  transform: translateY(-100%)
  transition: transform cubic-bezier(0.4, 0.0, 0.6, 1) 400ms
  .container
    opacity: 0
    box-sizing: border-box
    padding: 36px 16px
    margin-top: 50px
    .ul-menu
      display: flex
      flex-direction: column
      list-style: none
      margin: 0
      padding: 0
      .li-action
        padding: 3px 0
        .button
          cursor: pointer
          border-radius: 3px
          display: inline-flex
          align-items: center
          padding: 10px 16px 8px
          font-size: 14px
          &:hover
            background-color: #91034E
  &.active
    transform: translateY(0)
    .container
      animation: 200ms cubic-bezier(0.4, 0.0, 0.6, 1) 250ms forwards delayedShow
</style>
