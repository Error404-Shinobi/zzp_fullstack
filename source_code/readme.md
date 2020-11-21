 # 源码分析
 
 ## 国际化命名规范 BEM

1. 取类名
    - .weui-btn
        btn组件名 70%由框架提供，每个框架都会提供基础类
        weui 项目前缀   项目组
2. CSS知识点
    - 元素分为行内元素和块级元素    inline,block    inline-block
    - 元素在页面上的占位，由内容(w h) padding border margin position 构成   盒子模型
3. 面向对象的CSS
    - 一个元素有多个类
        .weui-btn Block 独立实体，有独立意义 (基础类)
        两个下划线Element     元素 block的一部分，没有独立的意义
        .weui-btn_primary   Modifier block或element上的标记 (多态)
    - 
4. 安装一个插件
    node    js的后端
    npm i -g live-server
    live-server web服务器
5. 结构
     结构套路   适用于移动端页面 超越项目本身
     .page>.page__hd+.page__bd
      weui 项目组
     BEM 搭积木思想 
     Block块
     Element 子元素 __
     Modifier 装饰 _