---
title: Vue2課程(6)：v-bind動態切換屬性
date: 2021-06-06
tags: ["Vue2"]
---
## v-bind
* 使用`v-bind`可以動態載入屬性資料，縮寫：`:`。

-----------------------------------------------
* 將圖片路徑綁定動態資料
```html
<div id="app">
  <img :src="imgSrc" :style="imgFluid" alt="">
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    imgUrl: 'https://images.unsplash.com/photo-1479568933336-ea01829af8de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9926ef56492b20aea8508ed32ec6030&auto=format&fit=crop&w=2250&q=80',
    imgFluid: 'max-width:100%;height:auto'
  }
});
```
輸出結果：
```html
<div id="app">
  <img src="https://images.unsplash.com/photo-1479568933336-ea01829af8de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d9926ef56492b20aea8508ed32ec6030&auto=format&fit=crop&w=2250&q=80" alt="" style="max-width: 100%; height: auto;">
</div>
```
-----------------------------------------------
* 動態綁定樣式，並用三元判斷式切換。
```html
<div id="app">
  <button
    type="button"
    :class="{ 'active': isClick }"
    @click="isClick=!isClick">按鈕
  </button>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    isClick: false
  }
});
```
```css
.active{
  background-color: red;
}
```

-----------------------------------------------
* 選擇radio，切換style樣式(必須用小駝峯方式撰寫)。
```html
<div id="app">
  <input type="radio" v-model="color" value="red">紅色
  <input type="radio" v-model="color" value="blue">藍色
  <p :style="{'backgroundColor':color}">控制我的背景顏色</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    color: 'blue'
  }
});
```

-----------------------------------------------
* 勾選checkbox，切換style樣式。
```html
<div id="app">
  <input type="checkbox" v-model="isActive">
  <p :style="{ backgroundColor:isActive? 'red':'' }">勾選後文字背景變紅色</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    isActive: false
  }
});
```