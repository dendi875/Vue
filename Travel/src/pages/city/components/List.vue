<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
              <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      required: true
    },
    hotCities: {
      type: Array,
      required: true
    },
    letter: {
      type: String,
      required: true
    }
  },
  // 把 vuex 里的 city 映射到computed计算属性里，映射到 currentCity 这个属性里
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick: function (city) {
      // 组件调用 Actions 使用 dispatch 方法
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 我们有一个mutation叫changeCity，然后我们把这个mutation映射到这个组件里的名字叫做 changeCity 方法里
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter: function () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
 @import "~styles/varibles.styl"
 .border-topbottom
   &:before
     border-color: #ccc
   &:after
     border-color: #ccc
 .border-bottom
   &:before
     border-color: #ccc
 .list
   overflow: hidden
   position: absolute
   top: 1.58rem
   left: 0
   right: 0
   bottom: 0
   .title
     line-height: .54rem
     background: #eee
     padding-left: .2rem
     color: #666
     font-size: .26rem
   .button-list
     overflow: hidden
     padding: .1rem .6rem .1rem .1rem
     .button-wrapper
       float: left
       width: 33.33%
       .button
         margin: .1rem
         padding: .1rem 0
         text-align: center
         border: .02rem solid #ccc
         border-radius: .06rem

   .item-list
     .item
       line-height: .76rem
       padding-left: .2rem
</style>
