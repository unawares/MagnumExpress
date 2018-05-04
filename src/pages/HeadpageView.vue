<template>
  <div class="headpage-view">
    <div class="headpage-header-view">
      <img class="main-logo" src="../assets/magnum.png" />
    </div>
    <div class="content-categories">
      <div class="headpage-categories-view">
        <div id="first" ref="first" class="categories previous">
          <div class="container">
            <div class="item-container" v-for="(category, index) in displayCategories.first" :key="index">
              <div class="item">
                <div class="icon">
                  <img :src="category.icon" />
                </div>
                <div class="title">
                  <span class="text">{{ category.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="second" ref="second" class="categories current">
          <div class="container">
            <div class="item-container" v-for="(category, index) in displayCategories.second" :key="index">
              <div class="item">
                <div class="icon">
                  <img :src="category.icon" />
                </div>
                <div class="title">
                  <span class="text">{{ category.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="third" ref="third" class="categories next">
          <div class="container">
            <div class="item-container" v-for="(category, index) in displayCategories.third" :key="index">
              <div class="item">
                <div class="icon">
                  <img :src="category.icon" />
                </div>
                <div class="title">
                  <span class="text">{{ category.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="state === 'collapsed'" class="categories buttons">
          <div class="container">
            <div class="button-container-left">
              <div class="button" @click="toPreviousCategories">
                <img class="icon" src="../assets/icons/arrow-left.svg" />
              </div>
            </div>
            <div class="spacer"></div>
            <div class="button-container-right">
              <div class="button" @click="toNextCategories">
                <img class="icon" src="../assets/icons/arrow-right.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="state === 'expanded' && expanded.length > 0"
        v-for="(categories, index) in expanded"
        :key="index"
        class="headpage-categories-view">
        <div class="categories current">
          <div class="container">
            <div class="item-container" v-for="(category, index) in categories" :key="index">
              <div v-if="category.type !== 'none'" class="item">
                <div class="icon">
                  <img :src="category.icon" />
                </div>
                <div class="title">
                  <span class="text">{{ category.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toggle">
      <span v-if="state === 'collapsed'" class="button" @click="setState('expanded')">Показать все</span>
      <span v-else-if="state === 'expanded'" class="button" @click="setState('collapsed')">Скрыть все</span>
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import { EasingFunctions } from '@/utils/EasingFunctions'

const TO_RIGHT = 1
const TO_LEFT = -1

function animator (callback, ms) {
  var state = 'playing'
  var startDate = new Date()
  var f = () => {
    let passed = (new Date()).getTime() - startDate.getTime()
    callback(Math.max(0, Math.min(1, passed / ms)))
    setImmediate(() => {
      if (passed <= ms && state === 'playing') {
        f()
      }
    })
  }
  f()
  return {
    stop () {
      state = 'stopped'
    }
  }
}

var _options = {
  first: {
    lastScale: 0.6,
    lastPercentX: -100
  },
  second: {
    lastScale: 1,
    lastPercentX: 0
  },
  third: {
    lastScale: 0.6,
    lastPercentX: 100
  },
}

export default {
  props: [
    'width'
  ],
  name: 'HeadpageView',
  data () {
    return {
      state: 'collapsed',
      categories: [
        {
          title: '1',
          icon: '/static/icons/categories/bread.svg',
          type: 'item'
        }, {
          title: '2',
          icon: '/static/icons/categories/chicken.svg',
          type: 'item'
        }, {
          title: '3',
          icon: '/static/icons/categories/conservation.svg',
          type: 'item'
        }, {
          title: '4',
          icon: '/static/icons/categories/fish.svg',
          type: 'item'
        }, {
          title: '5',
          icon: '/static/icons/categories/fruit.svg',
          type: 'item'
        }, {
          title: '6',
          icon: '/static/icons/categories/meat.svg',
          type: 'item'
        }, {
          title: '7',
          icon: '/static/icons/categories/milk.svg',
          type: 'item'
        }, {
          title: '8',
          icon: '/static/icons/categories/bread.svg',
          type: 'item'
        }, {
          title: '9',
          icon: '/static/icons/categories/chicken.svg',
          type: 'item'
        }, {
          title: '10',
          icon: '/static/icons/categories/conservation.svg',
          type: 'item'
        }, {
          title: '11',
          icon: '/static/icons/categories/fish.svg',
          type: 'item'
        }, {
          title: '12',
          icon: '/static/icons/categories/fruit.svg',
          type: 'item'
        }, {
          title: '13',
          icon: '/static/icons/categories/meat.svg',
          type: 'item'
        }, {
          title: '14',
          icon: '/static/icons/categories/milk.svg',
          type: 'item'
        }, {
          title: '15',
          icon: '/static/icons/categories/conservation.svg',
          type: 'item'
        }, {
          title: '16',
          icon: '/static/icons/categories/fish.svg',
          type: 'item'
        }, {
          title: '17',
          icon: '/static/icons/categories/fruit.svg',
          type: 'item'
        }, {
          title: '18',
          icon: '/static/icons/categories/meat.svg',
          type: 'item'
        }, {
          title: '19',
          icon: '/static/icons/categories/milk.svg',
          type: 'item'
        }
      ],
      expanded: [],
      indexOfFirstCategory: 0,
      displayCategories: {
        first: [],
        second: [],
        third: []
      },
      current: 2,
      count: 0,
      itemWidth: 80,
      itemMargin: 5,
      animator: undefined,
      lastClickDate: new Date(),
      indexOfFirstItem: 0
    }
  },
  mounted () {
    this.setCountByResponsive()
    this.initCategories()
    window.test = this
  },
  watch: {
    categories () {
      this.setCountByResponsive()
      this.initCategories()
    },
    width () {
      this.setCountByResponsive()
      this.initCategories()
    }
  },
  methods: {
    getElementsForAnimateByOrder() {
      switch (this.current) {
        case 1:
          return [
            this.$refs.third,
            this.$refs.first,
            this.$refs.second,
          ]
        case 2:
          return [
            this.$refs.first,
            this.$refs.second,
            this.$refs.third
          ]
        case 3:
          return [
            this.$refs.second,
            this.$refs.third,
            this.$refs.first,
          ]
      }
    },
    incrementCurrent () {
      this.current += 1
      if (this.current > 3) {
        this.current = 1
      }
    },
    decrementCurrent () {
      this.current -= 1
      if (this.current < 1) {
        this.current = 3
      }
    },
    toNextCategories () {
      this.indexOfFirstItem += this.count
      if (this.indexOfFirstItem >= this.categories.length) {
        this.indexOfFirstItem = this.indexOfFirstItem % this.categories.length
      }
      if ((new Date()).getTime() - this.lastClickDate.getTime() < 320) {
        return
      } else {
        this.lastClickDate = new Date()
      }
      let [previous, current, next] = this.getElementsForAnimateByOrder()
      this.incrementCurrent()
      this.initCategories()
      this.animate(current, next, 1)
    },
    toPreviousCategories () {
      this.indexOfFirstItem -= this.count
      if (this.indexOfFirstItem < 0) {
        this.indexOfFirstItem = this.categories.length - Math.abs(this.indexOfFirstItem) % this.categories.length
      }
      if ((new Date()).getTime() - this.lastClickDate.getTime() < 320) {
        return
      } else {
        this.lastClickDate = new Date()
      }
      let [previous, current, next] = this.getElementsForAnimateByOrder()
      this.decrementCurrent()
      this.initCategories()
      this.animate(current, previous, -1)
    },
    animate (from, to, direction) {
      var options = {
        from: {
          lastPercentX: _options[from.id].lastPercentX,
          lastScale: _options[from.id].lastScale,
        },
        to: {
          lastPercentX: _options[to.id].lastPercentX,
          lastScale: _options[to.id].lastScale,
        }
      }
      options.to.lastPercentX = direction * 100
      var f1 = (p) => {
        let progress = EasingFunctions.easeOutQuad(p)
        let progress2 = EasingFunctions.easeInQuad(p)
        let percent = _options[to.id].lastPercentX = options.to.lastPercentX - options.to.lastPercentX * progress
        let scale = _options[to.id].lastScale = options.to.lastScale + (1 - options.to.lastScale) * progress2
        to.style.transform = `translateX(${percent}%) scale(${scale})`
      }
      var f2 = (p) => {
        let progress = EasingFunctions.easeOutQuad(p)
        let progress2 = EasingFunctions.easeInQuad(p)
        let percent = _options[from.id].lastPercentX = options.from.lastPercentX - direction * (direction * options.from.lastPercentX + 100) * progress
        let scale = _options[from.id].lastScale = options.from.lastScale - (options.from.lastScale - 0.6) * progress
        from.style.transform = `translateX(${percent}%) scale(${scale})`
      }
      if (this.animator) {
        this.animator.stop()
      }
      this.animator = animator(f1, 800)
      animator(f2, 800)
    },
    initCategories () {
      switch (this.current) {
        case 1:
          this.displayCategories.first = []
          for (let i = this.indexOfFirstItem; i < this.indexOfFirstItem + this.count; i++) {
            if (i < this.categories.length) {
              this.displayCategories.first.push(this.categories[i])
            } else {
              this.displayCategories.first.push(this.categories[i % this.categories.length])
            }
          }
          break
        case 2:
          this.displayCategories.second = []
          for (let i = this.indexOfFirstItem; i < this.indexOfFirstItem + this.count; i++) {
            if (i < this.categories.length) {
              this.displayCategories.second.push(this.categories[i])
            } else {
              this.displayCategories.second.push(this.categories[i % this.categories.length])
            }
          }
          break
        case 3:
          this.displayCategories.third = []
          for (let i = this.indexOfFirstItem; i < this.indexOfFirstItem + this.count; i++) {
            if (i < this.categories.length) {
              this.displayCategories.third.push(this.categories[i])
            } else {
              this.displayCategories.third.push(this.categories[i % this.categories.length])
            }
          }
          break
      }
      if (this.state === 'expanded') {
        var _expanded = []
        var count = 0
        var index = 0
        _expanded[index] = []
        for (let i = this.indexOfFirstItem; i < this.categories.length + this.indexOfFirstItem; i++) {
          if (i < this.categories.length) {
             _expanded[index].push(this.categories[i])
          } else {
             _expanded[index].push(this.categories[i % this.categories.length])
          }
          count += 1
          if (count === this.count) {
            count = 0
            index += 1
            _expanded[index] = []
          }
        }
        while (count < this.count) {
          _expanded[index].push({
            type: 'none'
          })
          count += 1
        }
        _expanded.splice(0, 1)
        this.expanded = _expanded
      }
    },
    setCountByResponsive () {
      let el = document.querySelector('.categories.current .container')
      this.count = Math.floor(el.clientWidth / (this.itemWidth + 2 * this.itemMargin))
    },
    setState (state) {
      this.expanded = []
      this.state = state
      this.initCategories()
      console.log(this.state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.headpage-header-view
  padding-top: 50px
  height: 70vw
  max-height: 450px
  display: flex
  justify-content: center
  align-items: center
  .main-logo
    max-height: 160px
    max-width: 75%
    
.toggle
  width: 100%
  height: 40px
  display: flex
  align-items: center
  justify-content: center
  .button
    display: inline-block
    cursor: pointer

.content-categories
  padding: 16px 0
  overflow: hidden
  background-color: #F2F2F2
  .headpage-categories-view
    height: 130px
    position: relative
    &:last-of-type
      margin-bottom: 36px
    .categories
      position: absolute
      height: 100%
      width: 100%
      &.previous
        transform: translateX(-100%)
      &.current
        transform: translateX(0%)
      &.next
        transform: translateX(100%)
      .container
        box-sizing: border-box
        padding: 0 36px
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        .item-container
          display: inline-flex
          align-items: center
          justify-content: center
          position: relative
          flex-grow: 1
          height: 100%
          margin: 5px
          .item
            position: relative
            cursor: pointer
            display: inline-flex
            align-items: center
            justify-content: center
            flex-grow: 1
            height: 55%
            &:hover
              opacity: 0.7
            .icon
              padding: 5% 5% 0
              box-sizing: border-box
              position: absolute
              height: 100%
              width: 100%
              img
                height: 100%
                width: 100%
            .title
              top: 100%
              position: absolute
              width: 100%
              .text
                box-sizing: border-box
                text-overflow: ellipsis
                overflow: hidden
                font-size: 13px
                width: 100%
                display: inline-block
                text-align: center     
      &.buttons
        pointer-events: none;
        transform: translateX(0%)
        .spacer
          flex-grow: 1
          height: 100%
        .button-container-left, .button-container-right
          display: inline-flex
          align-items: center
          justify-content: center
          height: 100%
          width: 36px
          position: relative
        .button-container-left
          position relative
          right: 36px
        .button-container-right
          position relative
          left: 36px
        .button
          opacity: 0.6
          pointer-events: auto
          position: fixed
          z-index: 100
          cursor: pointer
          display: inline-flex
          align-items: center
          justify-content: center
          flex-grow: 1
          height: 36px
          width: 36px
          border-radius: 100%
          .icon
            width: 12px
          &:hover
            background-color: #DDDDDD

      
</style>
