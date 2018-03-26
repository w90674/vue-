<template>
  <div id="sitenav" class="clearfix">
    <div class="nav_wrap">
      <div class="side_menu" id="inner_menu">
        <div class="menu_tip">热卖商品分类<i></i></div>
        <div class="menu_con clearfix">
          <ul class="cata_menu">
            <li v-for="(item,index) in goods">
              <div :class="(index+1) | renameClass">
                <a href="##"
                   target="_blank" style="color:#000000">{{item.sort[0]}}</a>
              </div>
              <div class="menu">
                <a href="##" target="_blank">{{item.sort[1]}}</a>
                <a href="##" target="_blank">{{item.sort[2]}}</a>
              </div>
            </li>
          </ul>
          <div class="sub_cata">
            <div class="cataOne clearfix" v-for="item in goods">
              <div class="cata_list">
                <dl v-for="list in item.lists">
                  <dt>{{list.title}}</dt>
                  <dd>
                    <a target="_blank" href="javascript:void(0);"
                       v-for="detail in list.details"
                    >{{detail}}</a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav_bar clearfix">
        <li class="current"><a href="javascript:void(0);">首页</a></li>
        <li>
          <a href="javascript:void(0);">宝宝奶粉</a>
        </li>
        <li>
          <a href="javascript:void(0);">宝宝奶粉</a>
        </li>
        <li>
          <a href="javascript:void(0);">宝宝奶粉</a>
        </li>
        <li>
          <a href="javascript:void(0);">宝宝奶粉</a>
        </li>
        <li>
          <a href="javascript:void(0);">宝宝奶粉</a>
        </li>
        <li class="shop_car"><a href="javascript:void(0);">去购物车结算<b class="shop_count">0</b></a></li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'navigate',
    data() {
      return {
        flag:false,
        goods: [
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['宝宝尿裤', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '尿裤品牌',
                details: ['花王','Merries尤妮佳','moony大王','GOON帮宝适','Pampers']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['哈密瓜','葡萄味','草莓味'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
          {
            sort: ['母婴产品', '营养食品', '宝宝奶粉'],
            lists: [
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
              {
                title: '奶粉品牌',
                details: ['Nutrilon(牛栏)', 'HeroBaby(美素)', 'Aptamil(爱他美)']
              },
              {
                title: '奶粉段位',
                details: ['美素1段', '美素3段', '牛栏3段', '牛栏5段', '成长1', '成长2']
              },
              {
                title: '进口奶粉 ',
                details: ['德国(爱他美)', '荷兰(美素)', '荷兰(牛栏)', '意大利(美林)']
              },
            ]
          },
        ],
      }
    },
    filters: {
      renameClass(val){
        console.log(val);
        return 'menu_title title' + val;
      }
    },
    mounted(){
        $('.cata_menu li').hover(function () {
          let idx=$(this).index();
          $('.cataOne').eq(idx).addClass('showCata');
        },function () {
          $('.cataOne').removeClass('showCata');
          }
        )
    }
  }
</script>

<style lang="stylus" scoped>
  #sitenav {
    width: 100%;
    height: 41px;
    padding-bottom: 4px;
    background-repeat: repeat-x;
    background-position: 0px -60px;
    .nav_wrap {
      width: 1200px;
      height: 41px;
      margin: 0 auto;
      position: relative;
      z-index: 1000;
      .side_menu {
        width: 206px;
        position: absolute;
        left: 0;
        top: 0;
        .menu_tip {
          height: 45px;
          line-height: 45px;
          background: #e60211;
          padding-left: 15px;
          color: #fff;
          font-size: 16px;
          position: relative;
          i {
            display: block;
            width: 9px;
            height: 8px;
            background: url(/Volumes/App/git/vue-pc-website/rebuild/static/images/white_arrow.gif) no-repeat;
            float: right;
            position: absolute;
            right: 18px;
            top: 18px;
          }
        }
        .menu_con {
          width: 204px;
          border: 1px solid #ddd;
          border-top: none;
          background: #fff;
          position: relative;
          z-index: 10;
          .sub_cata {
            position: absolute;
            left: 204px;
            top: 0px;
            border-right: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            height: auto !important;
            min-height: 488px;
            z-index: 10;
          }
          .cata_menu {
            overflow: hidden;
            border-bottom: 3px solid #e12114;
            li {
              padding: 5px 12px 5px 6px;
              .menu_title {
                height: 25px;
                line-height: 24px;
                background: url(/Volumes/App/git/vue-pc-website/rebuild/static/img/sidenav_icon_02.png) no-repeat left 3px;
                padding-left: 24px;
                .title1 {
                  background-position: left -25px;
                }
                .title2 {
                  background-position: left -52px;
                }
                .title3 {
                  background-position: left -76px;
                }
                .title4 {
                  background-position: left -107px;
                }
                .title5 {
                  background-position: left -136px;
                }
                .title6 {
                  background-position: left -166px;
                }
                .title7 {
                  background-position: left -187px;
                }
                .title8 {
                  background-position: left -209px;
                }
              }
            }
          }
        }
      }
    }
  }



  .menu_con .cata_menu li .menu_title a {
    color: #000;
    font-size: 14px;
  }

  .menu_con .cata_menu li .menu {
    padding-top: 6px;
    height: 20px;
    padding-left: 24px;
    a {
      color: #636060;
      line-height: 20px;
      &:hover {
        color: #e60111;
      }
    }
  }

  .menu_con .cata_menu li:nth-child(even) {
    background: #f9f9f9;
  }

  .menu_con .cata_menu li.current {
    background: #f9f9f9;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    padding: 4px 12px 4px 6px;
  }

  .menu_con .cata_menu a, .menu_con .sub_cata a {
    position: relative;
  }

  .menu_con .cata_menu a b.hot_note, .menu_con .sub_cata a b.hot_note {
    background: url(/Volumes/App/git/vue-pc-website/rebuild/static/img/hot.png) 0 0 no-repeat;
    width: 20px;
    height: 10px;
    overflow: hidden;
    position: absolute;
  }

  .menu_con .cata_menu a b.hot_note {
    top: -6px;
    left: 0;
  }

  .menu_con .sub_cata a b.hot_note {
    top: 0;
    right: 0;
  }


  .sub_cata .cataOne {
    overflow: hidden;
    width 0
    position: absolute
    background: #f9f9f9;
  }
  .sub_cata .showCata{
      width 500px
      transition width .7s
      -webkit-transition width .7s
    }

  .sub_cata .cata_list {
    width: 530px;
    overflow: hidden;
    float: left;
  }

  .sub_cata .cata_ad {
    margin-top: 12px;
    margin-right: 10px;
    width: 210px;
    float: right;
  }

  .cata_list dl {
    overflow: hidden;
    margin-left: 10px;
    padding: 5px 0px;
    width: 100%;
    float: left;
    display: inline-block;
    border-bottom: 1px solid #E0E0E0;
  }

  .cata_list dl dt, .cata_list dl dd {
    line-height: 24px;
    float: left;
  }

  .cata_list dl dt {
    padding-left: 12px;
    width: 15%;
    line-height: 34px;
    font-weight: bold;
    color: #8e6635;
  }

  .cata_list dl dt a {
    color: #E60211;
    font-size: 14px;
    font-weight: bold;
    line-height: 34px;
  }

  .cata_list dl dt a:hover {
    color: #e50111;
  }

  .cata_list dl dd { /*overflow: hidden;*/
    width: 80%;
  }

  .cata_list dl dd a {
    display: block;
    float: left;
    margin: 2px 0px;
    padding: 3px 8px;
    background: url(/Volumes/App/git/vue-pc-website/rebuild/static/img/line_01.gif) left center no-repeat;
  }


  .cata_ad li {
    margin-bottom: 5px;
    padding-left: 10px;
  }

  .cata_ad li a {
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .cata_ad img {
    width: 200px;
  }

  .nav_wrap .nav_bar {
    margin-left: 206px;
    padding-left: 12px;
  }

  .nav_wrap .nav_bar li {
    display: inline-block;
    float: left;
    line-height: 41px;
    height: 41px;
  }

  .nav_wrap .nav_bar li a {
    padding: 0px 20px;
    font-size: 16px;
    color: #000;
    position: relative;
  }

  .nav_wrap .nav_bar li.current a, .nav_wrap .nav_bar li a:hover {
    color: #e60211;
  }

  .nav_wrap .nav_bar li a .new_nav {
    width: 29px;
    height: 17px;
    display: block;
    background: url("/Volumes/App/git/vue-pc-website/rebuild/static/img/common_icon.png") -20px 0px no-repeat;
    position: absolute;
    right: -10px;
    top: -14px;
  }

  .nav_wrap .nav_bar li a .new_nav_02 {
    width: 80px;
    height: 92px;
    display: block;
    background: url(/Volumes/App/git/vue-pc-website/rebuild/static/img/bp_02.png) 0 0 no-repeat;
    position: absolute;
    right: -17px;
    top: 18px;
  }

  .nav_bar li.shop_car {
    width: 150px;
    padding-left: 44px;
    height: 30px;
    border: 1px solid #fd0926;
    margin-top: 4px;
    float: right;
    background-position: 12px -25px;
  }

  .nav_bar li.shop_car a {
    position: relative;
    display: block;
    text-align: left;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    margin-top: 5px;
    border-left: 1px solid #fd0926;
    width: 135px;
    padding-left: 16px;
    padding-right: 0px;
  }

  .shop_car .shop_count {
    display: block;
    padding-left: 8px;
    height: 31px;
    line-height: 31px;
    width: 37px;
    text-align: center;
    color: #fff;
    position: absolute;
    right: 0px;
    top: -6px;
    background: url(/Volumes/App/git/vue-pc-website/rebuild/static/img/shop_car_count.gif) no-repeat;
  }
</style>
