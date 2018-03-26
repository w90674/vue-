<template>
  <div class="floor clearfix">
    <h2 class="floor_title"><span></span>商品类A</h2>
    <ul class="floor_tab clearfix">
      <li  @click="flag=true"><a :class="{current:flag}" href="javascript:;">主要商品a</a></li>
      <li  @click="flag=false"><a :class="{current:!flag}" href="javascript:;">主要商品aa</a></li>
    </ul>
    <div class="floor_content clearfix">
      <div class="floor_side">
        <div class="floor_pic"><a href="javascript:void(0)"><img src="static/img/1007.png"></a>
        </div>
        <ul class="floor_cata">
          <li><a href="javascript:void(0)">美容护肤</a></li>
          <li><a href="javascript:void(0)">时尚彩妆</a></li>
          <li><a href="javascript:void(0)">身体护肤</a></li>
          <li><a href="javascript:void(0)">洗发护发</a></li>
        </ul>
        <div class="floor_brand">
          <div class="brand_tip">推荐品牌</div>
          <ul class="brand_list">
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="floor_show">
        <div class="deal_list" v-show="!flag" >
          <div class="deal_col_1">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品A1</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品A1</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
          </div>
          <div class="deal_advs_1">
            <a target="_blank" href="javascript:void(0)"><img border="0" width="482" height="328"
              src="static/img/3.jpg"></a>
          </div>
          <div class="deal_col_1 right">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品A1</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品A1</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
          </div>
          <div class="deal_col_2">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)"><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" ><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" ><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)"><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div class="deal_list" v-show="flag">
          <div class="deal_col_1">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
          </div>
          <div class="deal_advs_1">
            <a target="_blank" href="javascript:void(0)"><img border="0" width="482" height="328"
                                                              src="static/img/2.jpg"></a>
          </div>
          <div class="deal_col_1 right">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" class="small"><img src="static/img/35.jpg" alt=""></a>
                <h4><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
          </div>
          <div class="deal_col_2">
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)"><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" ><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)" ><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>
            <div class="deal_item">
              <div class="deal_inner">
                <a href="javascript:void(0)"><img src="static/img/35.jpg" alt=""></a>
                <h4 class="h4"><a class="deal_name" href="javascript:void(0)">商品B2</a></h4>
                <p class="deal_price">¥99.00
                  <del>原价198.00</del>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'app',
    data() {
      return {
          flag:true,
        product_sorts: ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7', '类别8']
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .floor {
    width 1200px
    margin 18px auto
    .floor_title {
      width: 210px;
      float: left;
      padding-left: 25px;
      font-size: 24px;
      background: #d055a1;
      color: #fff
    }
    .floor_tab{
        border-bottom: 3px solid #d055a1;
      li {
        float: left;
        width: 210px;
        font-size: 15px;
        font-weight: bold;
        padding-top: 5px;
        .current {
          color red
        }
      }
    }
  }

  .floor .floor_content {
    background: #ffffff;
  }

  .floor .floor_side {
    float: left;
    width: 236px;
    position: relative;
  }

  .floor_side .floor_pic {
    width: 234px;
    height: 194px;
    position: relative;
    border-left: 1px solid #d2d3d7;
    border-right: 1px solid #ebecee;
  }

  .floor_side .floor_pic img {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  .floor_side .floor_cata {
    width: 234px;
    height: 120px;
    border-left: 1px solid #d2d3d7;
    border-right: 1px solid #ebecee;
    padding: 13px 0px 14px;
    overflow: hidden;
    background: #f6f6f6;
  }

  .floor_side .floor_cata li {
    width: 90px;
    padding-left: 27px;
    float: left;
    display: inline-block;
    height: 24px;
    line-height: 24px;
  }

  .floor_side .floor_cata li a {
    color: #636060;
  }

  .floor_side .floor_brand {
    width: 236px;
  }

  .floor_brand .brand_tip {
    width: 236px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background: #d055a1;
  }

  .floor_brand .brand_list {
    width: 234px;
    height: 187px;
    padding-top: 3px;
    border-left: 1px solid #d2d3d7;
    border-bottom: 1px solid #d2d3d7;
    border-right: 1px solid #ebecee;
  }

  .floor_brand .brand_list li {
    width: 100px;
    height: 43px;
    float: left;
    overflow: hidden;
    border: 1px solid #ddd;
    padding: 2px;
    margin: 10px 0 0 7px;
    box-shadow: 0px 0px 2px #ddd;
    border-radius: 2px;
  }

  .floor_brand .brand_list li a img {
    width: 100%;
    height: 100%;
  }

  .floor .floor_show {
    float: left;
    width: 100%;
    height: 636px;
    margin-left: -237px;
    border-right: 1px solid #d2d3d7;
    overflow: hidden;
  }

    /*recss*/
  .deal_list {
    padding-left: 236px;
    height: 635px;
    overflow: hidden;
    border-bottom: 1px solid #d2d3d7;
  }

  .deal_list .deal_item {
    width: 240px;
    float: left;
    padding: 10px 0 0 10px;
    border-left: 1px solid #ebecee;
    border-bottom: 1px solid #ebecee;
    overflow: hidden;
    transition all 1s;
    -webkit-transition all .5s;
    transform  translate(0,0)
    -webkit-transform  translate(0,0)
    box-sizing border-box
  }
  .deal_list .deal_item:hover {
    transform translate(-8px,0);
    -webkit-transform translate(-8px,-8px);
    box-shadow 1px 1px 2px 3px #ccc
  }
  .deal_list .deal_item img {
    width: 90%
    height: 90%
    display: inline-block;
  }

  .deal_list .deal_item .deal_name {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    padding: 4px 15px 4px 10px;
  }

  .deal_list .deal_item .small{
    width: 120px;
    height: 120px;
    float: left;
     img{
       width 120px
       height 120px
       margin-top 10px
     }
      .deal_name{
        margin-top: 20px
        height 50px
      }
  }

  .deal_list .deal_item h4 .deal_name{
    margin 20px 0
  }

  .deal_list .deal_item .deal_price {
    display: block;
    height: 20px;
    line-height: 20px;
    color: #e22214;
    font-weight: bold;
    font-size: 14px;
    padding: 0px 15px 0px 10px;
  }

  .deal_list .deal_item del {
    color: #777;
    margin-left: 12px;
    float: right;
    font-weight: normal;
    display: inline-block;
  }
  .deal_col_1{
    width 240px
    height: 317px
    overflow hidden
    box-sizing border-box
    float left
    .deal_inner{
        height 157px
        width 100%
    }
    &.right{
      float right
    }
  }

  .deal_advs_1{
    float left
  }
  .deal_list .deal_col_2{
    float left
    .h4{
      height: 25px !important;
      margin: -20px 0 30px 0 !important;
    }
  }
</style>
