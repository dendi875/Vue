<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
      city: '',
      swiperList: []
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
        this.city = data.city
        this.swiperList = data.swiperList
      }
    }
  }
}
</script>

<style>

</style>
