##### 目的
刚接触vue，准备把普通的pc网站改造下练习，踩踩模块化开发的坑

#### 问题点记录：
- 1、css中的背景贴图在打包的时候无法正常加载进去，dev是正常的；
解决方法：[webpack 打包资源文件路径的正确引用方式](https://zhuanlan.zhihu.com/p/30119665)
- 2、git 误传文件夹删除可以使用
   ```
   git rm -r --cached filename
   git commit -m'description'
   git push -u origin master
   ```
   >以上可以解决配置失误导致文件夹的误传
- 3 、目前只是对部分数据使用了vue绑定，把布局拆分，一些公共组件可以整合、复用，以后逐步更新(3-27-18)
