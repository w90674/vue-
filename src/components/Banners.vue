<template>
  <div class="main_screen clearfix">
    <div class="slider_area">
      <div class="sliders">
        <ul>
          <li v-for="(pic,index) in sliderPics">
            <a target="_blank" href="javascript:void(0);">
              <img v-lazy="pic">
            </a>
          </li>
        </ul>
        <div class="slideBtn">
          <span class="current">0</span>
          <span class="">1</span>
          <span class="">2</span>
        </div>
      </div>
      <div class="recom_slider">
        <a class="clickBtn" href="javascript:void(0);" @click="goForward"><i></i></a>
        <ul>
          <li v-for="ban in bans"><a target="_blank" href="javascript:void(0);">
            <img v-lazy="ban"
            width="249" height="156"></a></li>
        </ul>
        <a  class="clickBtn right-arrow" href="javascript:;" @click="goBack"><i></i></a>
      </div>
    </div>
    <div class="recommend">
      <div class="recomm_news">
        <div class="news_title"><b class="red_dot"></b>早间新闻</div>
        <ul class="news_list">
          <li><a href="javascript:void(0);" target="_blank">面向大海春暖花开</a></li>
          <li><a href="javascript:void(0);" target="_blank">大减价快来抢购</a></li>
          <li><a href="javascript:void(0);" target="_blank">节日优惠机不可失</a></li>
        </ul>
      </div>
      <div class="recomm_tuan">
        <a target="_blank" href="javascript:void(0);"><img
        lowsrc="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="
        border="0" width="235" height="180"
        src="static/img/35.jpg" style="display: inline;"></a>
        <a target="_blank" href="javascript:void(0);"><img
        lowsrc="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="
        border="0" width="235" height="180"
        src="static/img/35.jpg" style="display: inline;"></a>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'bannerSlider',
    data() {
      return {
        sliderPics: ['static/img/37.jpg', 'static/img/38.jpg', 'static/img/39.jpg'],
        bans:['static/img/7.jpg', 'static/img/23.jpg', 'static/img/24.jpg','static/img/36.jpg', 'static/img/25.jpg', 'static/img/26.jpg','static/img/7.jpg','static/img/25.jpg' ]
      }
    },
    methods: {
      goForward:function () {
          if($('.recom_slider ul').position().left<-250*5){
              return
          }else {
            $('.recom_slider ul').animate({left:'-=250'+'px'});
          }
      },
      goBack:function () {
        if($('.recom_slider ul').position().left>-100){
          return
        }else {
          $('.recom_slider ul').animate({left:'+=250'+'px'});
        }
      }
    },
    mounted(){
        //轮播图：

      let picWidth=$('.sliders li').width();
      let i=0;
      loopSlider();
      function loopSlider() {
        window.timer=setInterval(function () {
          $('.slideBtn span').eq(i%3).addClass('current').siblings().removeClass('current');
          $('.sliders ul').animate({left:-(i%3)*744},1000,()=>i++);
        },5000)
      }

     $('.slideBtn span').mouseover(function () {
       let idx=$(this).index();
       $(this).addClass('current').siblings().removeClass('current');
       $('.sliders ul').animate({left:-idx*picWidth});
     })

      $('.sliders').hover(function () {
        clearInterval(window.timer);
        window.timer=null;
      },function () {
        loopSlider()
      })
    }
  }
</script>

<style lang="stylus" scoped>
.main_screen{
  width 1200px
  overflow hidden
  margin 0 auto
  .slider_area {
    width: 744px;
    float: left;
    margin-left: 213px;
    margin-top: 8px;
    overflow: hidden;
    .sliders {
      width: 744px;
      height: 292px;
      position: relative;
      overflow: hidden;
      z-index: 1;
      ul{
        overflow: hidden;
        width: 10000px;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1;
        border 1px solid #00a2e6
        li {
          width: 744px;
          height: 292px;
          float: left;
          a ,img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .slideBtn {
      width: auto;
      height: 14px;
      position: absolute;
      z-index: 3;
      right: 10px;
      bottom: 13px;
      span {
        display: block;
        width: 14px;
        height: 14px;
        float: left;
        margin-left: 6px;
        background: #fff;
        font-size 0
      }
      .current {
        background: #E5003A;
      }
    }
    .recom_slider {
      width: 750px;
      box-sizing border-box
      height: 180px;
      margin-top: 8px;
      overflow: hidden;
      position: relative;
      z-index: 2;
      left 0;
      border-top: 1px solid #e6e7e9;
      border-bottom: 1px solid #e6e7e9;
      ul {
        padding: 10px 0;
        position: absolute;
        z-index: 1;
        left: -255px;
        width: 10000px;
        li {
          width 250px
          height: 156px;
          box-sizing border-box
          float: left;
          border-right: 1px solid #e0e0e0;
        }
      }
      .clickBtn {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 70px;
        left 0
        z-index: 2;
        &:hover{
          background #757575
          color #fff
        }
        i {
          display block
          background url(/static/img/arrowbtn.png) no-repeat 4px 3px
          height 40px
          width 40px
        }
      }
      .right-arrow{
        transform rotate(180deg);
        -webkit-transform rotate(180deg);
        position absolute
        left 700px
      }
    }

  }

  .recommend {
    float: right;
    width: 235px;
    height: 478px;
    margin-left: 8px;
    margin-top: 8px;
    .recomm_news {
      width: 233px;
      border: 1px solid #d2d3d7;
      .news_title {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #d2d3d7;
        padding-left: 16px;
        font-size: 14px;
        .red_dot {
          display: block;
          float: left;
          width: 3px;
          height: 11px;
          margin-top: 9px;
          margin-right: 10px;
          background: #e22222;
        }

        .more {
          width: 45px;
          float: right;
          text-align: left;
          font-size: 12px;
        }

      }

      .news_list {
        padding: 8px 0;
        li {
          line-height: 24px;
          height: 24px;
          overflow: hidden;
          a {
            color: #68696a;
            margin-left: 9px;
          }

          em {
            font-weight: bold;
            font-size: 16px;
            font-style: normal;
            margin-right: 5px;
          }

        }
      }
    }
    .recomm_tuan {
      width: 233px;
      height: 360px;
      border: 1px solid #d2d3d7;
      border-top: 0px;
      overflow: hidden;
    }

  }
}
</style>
