<template>
  <div class="recom_brand clearfix">
    <h2 class="brand_title">品牌特卖<span>HOT BRAND</span></h2>
    <p class="brand_label">
      <a href="javascript:void(0)"
         target="_blank">Aveeno(艾维诺)</a>
      <a href="javascript:void(0)"
         target="_blank">Aveeno(艾维诺)</a>
      <a href="javascript:void(0)"
         target="_blank">Aveeno(艾维诺)</a>
      <a href="javascript:void(0)"
         target="_blank">Aveeno(艾维诺)</a>
      <a href="javascript:void(0)"
         target="_blank">Aveeno(艾维诺)</a>
    </p>
    <div class="brand_con">
      <div class="brand_banner">
        <a target="_blank" href="javascript:void(0)"><img
          data-original="javascript:void(0)"
          lowsrc="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="
          border="0" width="292" height="399"
          src="static/img/111.jpg"></a>
      </div>
      <ul class="brand_list">
        <li v-for="(pic,index) in brandLists"
            @mouseenter="maskShow(index)"
            @mouseleave="mask()"
        >
          <b class="black_layer5" v-show="flags[index]"></b>
          <a target="_blank"
             href="javascript:void(0)"><img data-original="javascript:void(0)"
            lowsrc="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="
            border="0" width="301" height="200"
            v-lazy="pic"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'recommand brand',
    data() {
      return {
          brandLists:[
              'static/img/222.jpg','static/img/222.jpg',
            'static/img/222.jpg','static/img/111.jpg','static/img/222.jpg','static/img/222.jpg'
          ],
          flags:[false,false,false,false,false]
      }
    },
    methods:{
        maskShow:function (val) {
          console.log(val);
          this.flags=this.flags.map((item,index)=>{
              if(index!=val){
                  item=!item
              }
              return item
          })
        },
        mask:function () {
          this.flags=this.flags.map(item=>item=false);
        }
    }
  }
</script>

<style lang="stylus" scoped>

  .recom_brand {
    width 1200px
    margin 18px auto
    overflow hidden
    position relative;
  }

  .recom_brand .brand_title {
    color: #000;
    font-size: 28px;
    height: 44px;
    line-height: 44px;
    text-align left
  }

  .recom_brand .brand_title span {
    font-size: 16px;
    font-weight: normal;
    color: #e22314;
    font-family: "arial";
    margin-left: 10px;
  }

  .recom_brand .brand_label {
    width: 800px;
    position: absolute;
    right: 0px;
    top: 22px;
    text-align: right;
  }

  .recom_brand .brand_label a {
    display: inline-block;
    padding-left: 18px;
    height: 16px;
    line-height: 16px;
    color: #6f6d6d;
    &:hover{
      color red
    }
  }

  .recom_brand .brand_con {
    height: 399px;
  }

  .recom_brand .brand_banner {
    width: 290px;
    height: 397px;
    border: 1px solid #ecedef;
    float: left;
  }

  .recom_brand .brand_list {
    width: 899px;
    height: 399px;
    overflow: hidden;
    margin-left: 299px;
    border: 1px solid #d2d3d7;
    border-top: 0px;
  }

  .recom_brand .brand_list li {
    width: 300px;
    height: 198px;
    float: left;
    box-sizing border-box;
    border: 1px solid #d2d3d7;
    margin-left: -1px;
    margin-bottom: -1px;
    position: relative;
    overflow: hidden;
  }

  .recom_brand .brand_list li.border_r0 {
    border-right: 0px;
  }

  .recom_brand .brand_list li:nth-child(4) {
    width: 599px;
  }

  .recom_brand .brand_list .brand_one {
    display: block;
    position: relative;
  }

  .brand_one .brand_name_bg {
    width: 289px;
    height: 38px;
    background: #666;
    -moz-opacity: 0.8;
    opacity: 0.8;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 1;
  }

  .brand_one .brand_name {
    width: 289px;
    height: 38px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 2;
    text-align: center;
    font-size: 14px;
    color: #fff;
    line-height: 38px;
  }

  .brand_one .brand_name .discount {
    color: #dd1500;
    font-size: 28px;
  }
  .black_layer5 {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000000;
    opacity .2
  }
</style>
