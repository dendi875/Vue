<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      cities: {}
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
