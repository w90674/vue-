# shopping

> write by vue and vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
###简介：
App分为四个页面(路由):首页、品牌、购物车、我的

###首页：
- 1、产品轮播图展示
- 2、品牌列表
- 3、点击导航跳转到对应品牌区

###品牌详情：
- 1、详情列表
- 2、实现按照价格、评论数、好评率的排列方式
- 3、点击购物车后弹出窗口可以添加到购物车

###购物车：
- 1、对购物车内的商品进行选择合计；
- 2、添加商品后是默认选中；
- 3、实现全选后购物列表内的所有商品被选中

###我的信息：
- 1、登陆、注册界面，注册要进行数据格式验证；
- 2、登陆和注册可以跳转到对应页面，进行与服务端数据的交互；
- 3、登陆后可以查看订单信息，未登陆前则无权限访问；
- 4、联系客服：跳转页面--出现官网、或者官网/电话等信息；
- 5、关于我们：介绍公司信息，只读；

###前端：
使用VUE+VUE-CLI+ElementUI
###后端：
暂时使用node+express搭建服务器，json模拟数据(完善后再考虑使用mongodb进行替换);


#####20170829:
1、基本的路由页面、样式进行补全，重构；
2、模拟数据手动设置；
3、search跨域问题解决，完成搜索；
4、购物列表实现了按照不同要求进行排列；
