---
title: Vue2課程(4)：v-on綁定事件
date: 2021-06-04
tags: ["Vue2"]
---
## v-on
* 使用`v-on`可增加使用者事件，例如滑鼠點擊、按下鍵盤等，簡化寫法`@`。
```html
<div id="app">
  <button type="button" v-on:click="addCount">按鈕</button>
  {{ count }}
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    count: 25
  },
  methods:{
    addCount:function(){
        this.count = this.count + 5;
    }
  }
});
```

-----------------------------------------------
* 點擊按鈕並反轉文字。
```html
<div id="app">
  <button type="button" @click="reverseText">按鈕</button>
  {{ apple }}
</div>
```
```js
const app = new Vue({
  el: '#app',
  data: {
    apple: '青森蘋果',
  },
  methods:{
    reverseText: function(){
      //split讓'青森蘋果' ->> ['青', '森', '蘋', '果']
      //reverse讓['青', '森', '蘋', '果'] ->> ['果', '蘋', '森', '青']
      //join讓['果', '蘋', '森', '青'] ->> '果蘋森青'
      this.apple = this.apple.split('').reverse().join('')
    }
  }
});
```

-----------------------------------------------
* 使用事件修飾符，阻止a連結預設轉跳。
```html
<div id="app">
  <a href="http://yahoo.com/" @click.prevent="">前往Yahoo雅虎</a>
</div>
```
```js
const app = new Vue({
  el: '#app',
});
```

-----------------------------------------------
* 點擊刪除該筆資料
```html
<div id="app">
  <ul>
    <li v-for="(item,index) in fruits">{{item}}
      <button type="button" @click="removeData(index)">X</button>
    </li>
  </ul>
</div>
```
```js
const app = new Vue({
  el: "#app",
  data:{
    fruits:["蘋果","香蕉","鳳梨","蓮霧"]
  },
  methods:{
      removeData: function (index){
        this.fruits.splice(index,1); //從第幾個開始刪除,刪除幾項
      }
  }
});
```