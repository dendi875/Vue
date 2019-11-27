<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      required: true
    }
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data: function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // updated 当页面的数据被更新时，同时页面完成了渲染之后这个生命周期函数会被执行
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick: function (event) {
      // 子组件通过 $emit 向父组件触发一个事件，父组件监听这个事件，接着父组件又通过属性传值的方式向兄弟组件传值
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) { // 做滑动的处理
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

<!--
我们希望只有在 touchstart 之后才可以触发 touchmove里的一些操作，所以需要在 data 里定义一个标志为 `touchStatus`（默认为false），
当你的手指触摸时 this.touchStatus = true，当结束触摸时 this.touchStatus = false。

优化：
1、startY 的值是一个固定的不需要每次都计算
2、做一个函数截流来限制函数执行的频率 定义一个 timer
-->
