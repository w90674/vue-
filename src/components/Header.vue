<template>
  <div>
    <div id="topNav">
      <div class="topnav">
        <ul class="top_nav_left">
          <li class="index"><b></b><a href="javascript:void(0);">首页</a></li>
          <li class="mobile"><b></b><a href="javascript:void(0);">手机版</a></li>
        </ul>
        <ul class="user_nav">
          <li class="login_reg">
            您好,游客 [<a href="javascript:void(0);">注册</a>] [<a href="javascript:void(0);">登录</a>]
          </li>
          <li><a href="javascript:void(0);">我的XX</a>|</li>
          <li><a href="javascript:void(0);">购物车</a>|</li>
          <li><a href="javascript:void(0);">帮助中心</a></li>
        </ul>
      </div>
    </div>
    <div id="header" class="clearfix" style="overflow: hidden">
      <div class="logo">
        <a href="javascript:void(0);" title="myVue.test">
          <img src="static/img/logo.png"></a>
      </div>

      <!--搜索 start-->
      <div class="form_search">
        <div style="border:1px solid #e60211; overflow:hidden;">
          <div class="txt_wrap">
            <input type="text" class="text" name="key" id="key" value="" maxlength="50" autocomplete="off">
          </div>
          <div class="btn_search_wrap">
            <input type="button" class="btn_search" value="搜索">
          </div>
        </div>
        <div class="search_hots">热门搜索：
          <a rel="nofollow" class="first" target="_blank"
             v-for="item in searchHots"
             :href="item[1]">{{item[0]}}</a>
        </div>
      </div>
      <!--搜索 end-->
      <div class="service_tel">
        客服热线：<span class="tel_icon"></span>
      </div>
      <ul class="push_pro">
        <li>
          <a target="_blank" href="javascript:void(0);"><img
            border="0" width="180" height="80" src="static/img/33.jpg">
            style="display: inline;"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'header',
    data() {
      return {
        searchHots: [['AAAA', 'javascript:void(0);'],
          ['BBBB', 'javascript:void(0);'],
          ['CCCC', 'javascript:void(0);'],
          ['DDDD', 'javascript:void(0);'],
          ['EEEEE', 'javascript:void(0);'],
          ['FFFF', 'javascript:void(0);'],
          ['GGGGG', 'javascript:void(0);'],
          ['HHHHHHH', 'javascript:void(0);'],
        ],
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #topNav {
    width: 100%;
    height: 27px;
    border-bottom: 1px solid #dedede;
    position: relative;
    background: #ffffff;
    .topnav {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      background: #ffffff;
    }
    .top_nav_left {
      float: left;
      li {
        float: left;
        line-height: 27px;
        margin-right: 15px;
        padding-left: 15px;
        position: relative;
        b {
          position: absolute;
          width: 12px;
          height: 16px;
          top: 8px;
          left: 0;
          background: url('/Volumes/App/git/vue-pc-website/rebuild/static/img/common_icon.png') 0 0 no-repeat;
        }
      }
      &.index b {
        width: 11px;
        height: 11px;
      }
      &.mobile {
        padding-left: 18px;
        b {
          top: 6px;
          background-position: 0px -20px;
        }
      }
      &.business b {
        width: 10px;
        height: 10px;
        top: 8px;
        background-position: 0px -40px;
      }
    }
    .user_nav {
      float: right;
      li {
        float: left;
        color: #94969a;
        line-height: 27px;
        a, .user_nav li b {
          color: #94969a;
          margin: 0px 7px;
        }
        a:hover {
          color: #333;
        }
        &.login_reg a, .user_nav li.red span {
          color: #e60211;
        }
      }
    }
  }

  #header {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 15px 0;
    background: #ffffff;
    .logo {
      width: 352px;
      height: 64px;
      float: left;
      margin-top: 9px;
      position: relative;
    }
    .form_search {
      width: 428px;
      height: 62px;
      float: left;
      margin-left: 51px;
      margin-top: 18px;
      #searchForm {
        border: 1px solid #e60211;
        overflow: hidden;
      }
      .txt_wrap {
        width: 380px;
        height: 36px;
        line-height: 36px;
        float: left;
        color: #8e8f91;
        .txt_type {
          width: 44px;
          padding-left: 9px;
          height: 36px;
          float: left;
          cursor: pointer;
          position: relative;
          border-right: 1px solid #d6cfcf;
          arrow {
            display: block;
            width: 7px;
            height: 4px;
            position: absolute;
            right: 6px;
            top: 12px;
            background: url(/Volumes/App/git/vue-pc-website/rebuild/static/images/black_arrow.gif) no-repeat;
          }
        }
        input {
          width: 368px;
          height: 36px;
          float: left;
          padding: 0px 6px;
          border: none;
          color: #8e8f91;
          &.thisOn {
            color: #333;
          }
        }
      }
      .btn_search_wrap {
        width: 46px;
        height: 36px;
        line-height: 36px;
        float: left;
        background: #E60211;
        overflow: hidden;
        .btn_search {
          background-color: rgba(0, 0, 0, 0);
          background-position: 14px 10px;
          cursor: pointer;
          border: none;
          height: 36px;
          float: left;
          font-size: 0;
          line-height: 200px;
          overflow: hidden;
          text-indent: -100px;
          width: 100%;
        }
      }
      .search_hots {
        width: 100%;
        height: 25px;
        line-height: 25px;
        overflow: hidden;
        color: #68696a;
        a {
          line-height: 24px;
          color: #68696a;
          margin-right: 7px;
          &:hover {
            color: #333;
          }
        }
      }
    }
  }

  #header .service_tel {
    width: 140px;
    float: left;
    margin-left: 12px;
    margin-top: 18px;
    line-height: 20px;
    color: #94969A;
    font-size: 14px;
    .tel_icon {
      display: block;
      background: url(/Volumes/App/git/vue-pc-website/rebuild/static/images/service_tel.jpg) no-repeat;
      width: 140px;
      height: 17px;
    }
  }

  #header .push_pro {
    width: 180px;
    height: 80px;
    overflow: hidden;
    float: right;
  }

</style>
