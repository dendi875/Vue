<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  data: function () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '上海迪士尼特惠成人票【刷身份证入园】',
              children: [
                {
                  title: '自营'
                },
                {
                  title: '无需换票'
                }
              ]
            },
            {
              title: '上海迪士尼度假区1日票+价值85元餐券成人票'
            },
            {
              title: '【去哪儿精选】门票+车+园内导览+赠园区餐券'
            }
          ]
        },
        {title: '学生票'},
        {title: '儿童票'},
        {title: '特惠票'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
