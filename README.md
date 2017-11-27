# lsgopage

> 企业官网

开发pc
```
npm start

or

npm run pc
```

移动端，针对移动端的样式，写`less`时后缀为`.mobile.less`
```
npm run mobile
```

`vue-loader`目前不支持引入`less`的插件，所以在实现`rem`计算时请使用`src/helpers/func.less`中的相应样式名进行计算

`less`版本为`3.0.0-alpha.3`，`2.x`版本会对`./index`默认加上后缀`.less`

移动端与pc端需要区分的组件，用`js`文件来决定如何引入，以下方式可以便捷添加
```
./bin/import-index.sh <component name>
```
