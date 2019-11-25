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
      swiperList: [],
      iconList: [],
      recommendedList: [],
      weekendList: []
    }
  },
  mounted: function () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo: function () {
      axios
        .get('/api/index.json')
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
