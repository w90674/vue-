<template>
  <div>
       <VHeader></VHeader>
       <VNav></VNav>
        <VBan></VBan>
        <VTab></VTab>
        <VAside></VAside>
         <VBrand></VBrand>
          <VProducts></VProducts>
         <VFooter></VFooter>
  </div>
</template>

<script>

  import VHeader from '@/components/Header'
  import VNav from '@/components/Nav'
  import VBan from '@/components/Banners'
  import VTab from '@/components/Tab'
  import VAside from '@/components/Aside'
  import VBrand from '@/components/Brand'
  import VProducts from '@/components/Products'
  import VFooter from '@/components/Foot'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  mounted(){
    $('.floor_tab').children('li').each((index,item)=>{
        $(item).mouseenter(function () {
          let index=$(this).index(),
            steps=$(this).width();
          console.log(index,steps);
          $(this).siblings('.tab_move').stop(true,true).animate({left:index*steps})
        })
    })
  },
  components:{VHeader,VNav,VBan,VTab,VAside,VBrand,VProducts,VFooter}
}
</script>

<style  lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color #fff;
}

</style>
