// 通过 Vuex 来创建一个仓库并导出，仓库里有 state，是用来存放共用的数据
// 共用数据有哪些？有 city，默认值是北京
// 在使用 localStorage 时如果用户使用的隐身模式会浏览器会抛出异常，所以要加个 try...catch

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaultCity
}
