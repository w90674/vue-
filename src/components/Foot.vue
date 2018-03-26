<template>
  <div id="footer">

    <div class="com_service clearfix">
      <ul class="buy_guide">
        <li class="guide_1"><em></em>
          <p>100%正品<br><span>精选诚信商家，正规渠道采购</span></p></li>
        <li class="guide_2"><em></em>
          <p>100%安全<br><span>国家检验检疫，海关严格监管</span></p></li>
        <li class="guide_3"><em></em>
          <p>100%低价<br><span>进口税费合理，365天特惠活动</span></p></li>
        <li class="guide_4"><em></em>
          <p>100%方便<br><span>多方式在线支付，保税仓统一发货</span></p></li>
        <li class="guide_5"><em></em>
          <p>100%放心<br><span>7天无理由退换，15天商品质量担保</span></p></li>
      </ul>
      <div class="service_list clearfix">
        <div>
          <dl>
            <dt>购买指南</dt>
            <dd><a href="javascript:void(0);" target="_blank">注册流程</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">购买流程</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">常见问题</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">商品组成</a></dd>
          </dl>
          <dl>
            <dt>支付与配送</dt>
            <dd><a href="javascript:void(0);" target="_blank">海关通关与关税</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">配送方式</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">支付方式</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">快递查询</a></dd>
          </dl>
          <dl>
            <dt>服务体系</dt>
            <dd><a href="javascript:void(0);" target="_blank">会员介绍</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">意见反馈</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">服务承诺</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">商务合作</a></dd>
          </dl>
          <dl>
            <dt>关于</dt>
            <dd><a href="javascript:void(0);" target="_blank">公司简介</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">加入我们</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">联系我们</a></dd>
            <dd><a href="javascript:void(0);" target="_blank">资讯中心</a></dd>
          </dl>

          <dl class="service_focus pl30">
            <dd><a href="javascript:void(0);" title="关注公众账号">
              <img alt="关注公众账号" src="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="></a>
            </dd>
            <dd>关注微信</dd>
          </dl>
          <dl class="service_focus">
            <dd><a href="javascript:void(0);" title="关注微博账号">
              <img alt="关注微博账号" src="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="></a>
            </dd>
            <dd>关注微博</dd>
          </dl>
          <dl class="service_focus pr30">
            <dd><a href="javascript:void(0);" title="关注手机版"><img alt="关注手机版" src="data:image/gif;base64,R0lGODlhAQABAIAAAO7u7v///yH5BAAHAP8ALAAAAAABAAEAAAICRAEAOw=="></a>
            </dd>
            <dd>关注手机版</dd>
          </dl>

          <dl class="weibo">
            <dd style="font-size: 18px; color: #000000;">服务热线</dd>
            <dd class="tel">400-000-0000</dd>
            <dd>客服：7×24小时</dd>
            <dd>客服邮箱：XXXXXX@XXX.com</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'footer',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  #footer {
    width: 100%;
    min-width: 1200px;
    margin-top: 24px;
    padding-bottom: 24px;
    border-top: 3px solid #E60211;
    background: #ffffff;
  }

  #footer .btm {
    background: #e60211;
    height: 59px;
    width: 100%;
  }


  #footer .com_service {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  #footer .buy_guide {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 10px;
  }

  .buy_guide li {
    display: inline-block;
    float: left;
    width: 235px;
    height: 36px;
    line-height: 36px;
    padding-left: 5px;
    font-size: 14px;
    color: #fff;
  }

  .buy_guide li em {
    display: block;
    width: 36px;
    height: 30px;
    float: left;
    margin-right: -20px;
    margin-top: 3px;
  }

  .buy_guide li.guide_1 em {
    background-position: -106px -121px;
  }

  .buy_guide li.guide_2 em {
    background-position: -106px -183px;
  }

  .buy_guide li.guide_3 em {
    background-position: -106px -245px;
  }

  .buy_guide li.guide_4 em {
    background-position: -106px -300px;
  }

  .buy_guide li.guide_5 em {
    background-position: -106px -363px;
  }

  .buy_guide li p {
    font-size: 14px;
    color: #333;
    line-height: 18px;
  }

  .buy_guide li span {
    color: #868484;
    font-size: 11px;
  }

  .service_list {
    overflow: hidden;
    margin-top: 10px;
    border-top: 1px solid #dedede;
    padding-top: 10px;
    position: relative;
  }

  .service_list div {
    width: 1200px;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
  }

  .service_list dl {
    padding: 0 50px;
    float: left;
    border-right: 1px solid #dedede;
    line-height: 26px;
    height: 124px;
  }

  .service_list dl dt {
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }

  .service_list dl a {
    color: #747676;
  }

  .service_list dl.service_focus {
    border-right: 0px;
    text-align: center;
    padding 0 10px
  }

  .service_list dl.pl30 {
    padding-left: 30px;
  }

  .service_list dl.pr30 {
    padding-right: 30px;
  }


</style>
