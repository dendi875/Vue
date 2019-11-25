<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data: function () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted: function () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo: function () {
      axios
        .get('/api/city.json')
        .then(this.handleGetCityInfoSuccess)
    },
    handleGetCityInfoSuccess: function (response) {
      response = response.data
      if (response.ret && response.data) {
        const data = response.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange: function (letter) { // 父组件监听子组件触发的事件，然后又通过属性传值的方式把 letter 传递给子组件
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
