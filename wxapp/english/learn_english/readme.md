小程序的第一个:
架构简单: 页面

数据 -》 页面
类似于奥利奥
每个页面由四个文件组成
.wxml  == .html  view = div
.wxss  == .css
.js    == .js
约定  js data 放的数据  wxml 中可直接用{{显示出来}}

1. 哪里有小程序的哪些组件
    https://www.w3cschool.cn/miniappbook/
2. 数据
    {{}}
    setData({
        key: val
    })
    页面会根据数据的改变而改变（数据绑定）