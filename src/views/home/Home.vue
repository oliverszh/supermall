<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import HomeSwiper from "views/home/childComps/HomeSwiper.vue"
import RecommendView from "views/home/childComps/RecommendView.vue"
import getHomeMultiData from "network/home.js"

export default {
  components : {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return {
      banners : [],
      recommends : []
    }
  },
  created(){
    getHomeMultiData().then(result=>{
      console.log(result);
      this.banners=result.data.banner.list;
      this.recommends=result.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color : #fff;
  }
</style>
