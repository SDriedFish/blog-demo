webpack4中提供的mode有两个值：development和production，默认值是 production
* development模式下，将侧重于功能调试和优化开发体验
* production模式下，将侧重于模块体积优化和线上部署

**两种方式指定mode**
1. 启动命令后加入参数
```json
"scripts": {
    "demo1": "webpack --mode development --config demo1/webpack.config.js --progress",
    "demo1-pro": "webpack --mode production --config demo1/webpack.config.js --progress"
}
```
```npm run demo1```并看看./dist/main-[chunkhash].js。 你看到了什么？ 是的，我知道，一个无聊的包…没有缩小！      
```npm run demo1-pro```并看看./dist/main-[chunkhash].js。  你现在看到什么？ 一个缩小的包！      
生产模式可以实现各种优化。 包括缩小，规模提升等等。另一方面，开发模式针对速度进行了优化，只不过是提供未缩小的捆绑包。   
2. 在配置文件中加入一个mode属性
```javascript
module.exports = {
  mode: 'production' 
};
```
webpack4.X 需要指定webpack --mode development   
**基本配置**
* entry 打包的入口从哪个文件开始
* output 打包后的文件保存在什么地方
>path 打包后保存的目录      
>filename 打包后的文件名    

filename：```[name]-[hash].js```打包后的文件名就是源文件名加上hash值```[name]-[chunkhash].js```生成的文件名就是源文件名加上hash值,唯一不同hash值和生成的chunkhash值不一样