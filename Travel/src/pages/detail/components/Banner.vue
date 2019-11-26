<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">上海市浦东新区川沙新镇上海迪士尼度假区内</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>
          73
        </div>
      </div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallayClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary: CommonGallary
  },
  props: {
    bannerImgs: {
      type: Array,
      default: function () {
        return [
          'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
        ]
      }
    }
  },
  data: function () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallayClose: function () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
  </style>
