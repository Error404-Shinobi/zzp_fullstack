# 基于百度大脑做node AI应用

- node 项目的搭建 project 开发工序
    1. 运行在后端
    npm 命令集
    版本号：1.0.0   1代表上线版本，第二个0表示添加功能等，第三个0通常出bug时使用
    - npm init 初始化命令
        得到 package.json
            script
        npm init -y默认创建一个package.json文件
    - npm run dev
        在dev中添加node index.js
    - npm yarn 都叫包管理器工具
        有大量第三方库可以使用
    - npm i -g baidu-aip-sdk
        安装到全局
        不带-g 只安装到当前目录下
        会产生一个node_modules目录
- AI 作为黑盒子
    SDK
- fs 模块
    1. 语言内置模块
        fs.readFile/writeFile/isDirectory/staStas
    2. url, callback 异步的
        readFileSync方法可以将异步变成同步
        先处理错误，err第一位
        data 数据
    在js文件中使用require关键字可以调用node_modlues文件夹下的接口