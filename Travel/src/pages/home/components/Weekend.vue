<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
          class="item border-bottom"
          v-for="item of weekendList"
          :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      weekendList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
          title: '上海泡汤圣地',
          desc: '上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必打卡',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1509/41/0a74389a026adc.jpg_r_640x214_5ad7add7.jpg',
          title: '上海赏秋攻略',
          desc: '上海的秋天，哪里都是美美哒'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
