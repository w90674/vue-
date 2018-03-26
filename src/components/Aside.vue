<template>
  <div class="asiders">
    <div class="rq_menu">
      <a href="javascript:void(0);" class="rq_member"></a>
      <a href="javascript:void(0);" class="rq_change"><i></i> 优惠券 <em>
        0</em></a>
      <a href="javascript:void(0);" class="rq_cart"><i></i> 购物车 <em>
        0</em></a>
      <a href="javascript:void(0);" class="rq_service"><i></i> 在线客服 </a>
      <a href="javascript:void(0);" class="rq_browse"></a>
      <a href="javascript:void(0);" class="rq_code"></a>
      <a href="javascript:void(0);" class="rq_gotop"></a>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'dock',
    data() {
      return {}
    },
    mounted(){
        window.onscroll=function () {
            let currentTop=$(this).scrollTop();
            if(currentTop>500){
              $('.asiders  .rq_gotop').fadeIn();
            }else {
                $('.asiders .rq_gotop').fadeOut();
            }
        }
        $('.rq_gotop').click(function () {
            $('html,body').animate({'scrollTop':0},1000)
        })
    }
  }
</script>

<style lang="stylus" scoped>
  .asiders {
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
  }

  .asiders .rq_menu {
    width: 36px;
    height: 100%;
    overflow: hidden;
    background: #000;
    position: fixed;
    right:0; top: 0;
    opacity: .8;
    z-index: 10;
  }
    .asiders .rq_menu a {
      display: block;
      overflow: hidden;
      position: absolute;
      background-image: url(/static/img/bg_sprites.png);
      background-repeat: no-repeat;
      background-position: 0 0;
      left: 10px;
    }

    .asiders .rq_menu a.rq_member {
      width: 18px;
      height: 20px;
      top: 25px;
    }
    .asiders .rq_menu a.rq_member:hover {
      background-position: -32px 0;
    }

    .asiders .rq_menu a.rq_change {
      width: 20px;
      height: 100px;
      top: 65px;
      background: none;
      color: #ffffff;
      padding-left: 4px;
    }
    .asiders .rq_menu a.rq_change i {
      display: block;
      width: 20px;
      height: 20px;
      background: url(/static/img/bg_sprites.png) 0 -183px no-repeat;
      margin-bottom: 5px;
      margin-left: -3px;
    }
    .asiders .rq_menu a.rq_change em {
      display: block;
      width: 20px;
      height: 16px;
      color: #D91864;
      font-weight: bold;
      text-align: center;
      margin-left: -4px;
    }
    .asiders .rq_menu a.rq_change:hover em {
      color: #ffffff;
    }
    .asiders .rq_menu a.rq_change:hover {
      color: #D91864;
    }
    .asiders .rq_menu a.rq_change:hover i {
      background-position: -36px -183px;
    }

    .asiders .rq_menu a.rq_cart {
      width: 16px;
      height: 100px;
      top: 170px;
      background: none;
      color: #ffffff;
      padding-left: 4px;
    }
    .asiders .rq_menu a.rq_cart i {
      display: block;
      width: 20px;
      height: 20px;
      background: url(/static/img/bg_sprites.png) 0 -20px no-repeat;
      margin-bottom: 5px;
      margin-left: -4px;
    }
    .asiders .rq_menu a.rq_cart em {
      display: block;
      width: 20px;
      height: 16px;
      color: #D91864;
      font-weight: bold;
      text-align: center;
      margin-left: -4px;
    }
    .asiders .rq_menu a.rq_cart:hover em {
      color: #ffffff;
    }
    .asiders .rq_menu a.rq_cart:hover {
      color: #D91864;
    }
    .asiders .rq_menu a.rq_cart:hover i {
      background-position: -33px -20px;
    }

    .asiders .rq_menu a.rq_service {
      width: 20px;
      height: 100px;
      top: 275px;
      left: 8px;
      background: none;
      color: #ffffff;
      padding-left: 6px;
    }
    .asiders .rq_menu a.rq_service i {
      display: block;
      width: 25px;
      height: 25px;
      background: url(/static/img/bg_sprites.png) -31px -108px no-repeat;
      margin-left: -7px;
    }
    .asiders .rq_menu a.rq_service:hover {
      color: #D91864;
    }
    .asiders .rq_menu a.rq_service:hover i {
      background-position: 1px -108px;
    }

    .asiders .rq_menu a.rq_browser {
      width: 25px;
      height: 20px;
      bottom: 120px;
      left: 8px;
      background-position: 0 -149px;
    }
    .asiders .rq_menu a.rq_browser:hover {
      background-position: -33px -149px;
    }

    .asiders .rq_menu a.rq_code {
      width: 20px;
      height: 20px;
      bottom: 70px;
      background-position: 0 -53px;
    }
    .asiders .rq_menu a.rq_code:hover {
      background-position: -32px -53px;
    }

    .asiders .rq_menu a.rq_gotop {
      display: none;
      width: 20px;
      height: 20px;
      bottom: 20px;
      background-position: 0 -81px;
    }
    .asiders .rq_menu a.rq_gotop:hover {
      background-position: -32px -81px;
    }

</style>
