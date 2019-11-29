# 高级node笔记Day1
1. npm (node package manager) node包管理器
2. npm -v 看版本号
3. 自带包：bodyparser,express,http,url,fs...

## npm管理包的哪些方面
1. 下载：
    [本地：本地开发依赖(npm i 包名 -D) 本地线上依赖(npm i 包名 -S)],[全局：npm i 包名 -g]
2. 生成package.json
    用npm init或npm init -y(包描述文件) 
3. {name:'' 包名, version:''版本号, description:''描述, main:''入口文件, scripts:''命令, author:''作者}

## 卸载(npm uninstall 包名 -D)
1. 本地卸载
  npm uninstall <包名> -D/-S
2. 全局卸载
  npm uninstall <包名> -g

#### 生成package.json  包描述文件
npm init

npm init -y  快速生成
{
  "name": "",                   包名
  "version": "1.0.0",           版本号 
  "description": "",            描述
  "main": "main.js",            入口文件
  "author": ""                  作者
}

## node模块
nodejs=>commonjs规范  一个js就是一个模块
commonjs规范：1.抛出模块:module.exports和exports   2.引入模块：require()默认它会找module.exports抛出的内容

特性：module.exports:后者会覆盖前者   exports:可以一个一个添加到module.exports的空对象里。

#### nodejs
nodejs ---->  commonjs规范
1个js就是一个模块
commonjs规范：

  抛出模块：
  module.exports和exports的区别和关系：
  exports是module.exports的别名
  module.exports :后者会覆盖前者
  exports：以属性的形式添加,不能直接赋值
  引入模块：require()  默认它会找module.exports 抛出的内容

## npm包查找规则
  require(模块标识)

  模块标识：1>路径  (相对路径和绝对路径)  2>包名
  require(模块标识)
模块表示：
1. 路径(相对路径和绝对路径) ./为相对路径  /为绝对路径

2. 报错：Error:cannot find module '包名'

2. node_modules 文件的查找规则：首先在当前文件夹下找node=>一层一层向上找到磁盘根目录=>全局路径查找 npm root -g(全局环境变量NODE-PATH)index.js

3. 先找对应包名文件夹=>package.json的main字段，没有就找index.js

4. npm root -g  是查看全局下载包的路径

报错：不是内部外部命令：解决方法：找执行文件所在目录配置到全局环境变量的path下








