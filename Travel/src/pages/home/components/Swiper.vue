<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: 1, imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'},
        {id: 2, imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/083c708a3949958bcbca0fcc0ea3d57f.jpg_750x200_e47acfc7.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /* 代表样式进行一个穿透 .wrapper 下面所有的子组件只要出现 swiper-pagination-bullet-active 就变色，就不受 scoped 限制 */
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
