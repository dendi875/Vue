<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe702;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe70a;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6eb;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  // 子组件通过 props 来接受父组件传递过来的数据
  // 因为单向数据流，子组件如果要修改父组件传递过来的数据，要先克隆一份
  // mapState的意思是把 vuex里的数据映射到本组件的computed计算属性里。
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
