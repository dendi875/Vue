<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendedList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecommend: HomeRecommend,
    HomeWeekend: HomeWeekend
  },
  data: function () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendedList: [],
      weekendList: []
    }
  },
  // 把 vuex 里的数据映射到本组件中的计算属性`city`里
  computed: {
    ...mapState(['city'])
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo: function () {
      axios
        .get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccuss)
    },
    getHomeInfoSuccuss: function (response) {
      response = response.data
      if (response.ret && response.data) {
        const data = response.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendedList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style>

</style>
