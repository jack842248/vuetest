---
title: Vue2課程(7)：Computed自動計算
date: 2021-06-07
tags: ["Vue2"]
---
## computed
* 使用 **computed** 可建立計算後的資料，有快取機制。
* **computed** 是在監控資料更動後，重新運算結果呈現於畫面上。

-----------------------------------------------
* 直接計算出總價
```html
<div id="app">
  總計：{{ totalPrice }} <!-- 70 -->
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  computed: {
    totalPrice: function(){
      return this.fruits.reduce((acc,val)=>{
        return acc + val.price
      },0)
    }
  }
});
```

-----------------------------------------------
* 搜尋資料名稱，自動顯示對應價錢。
```html
<div id="app">
  <input type="text" v-model="filterText">
  <p v-for="item in filterArray">{{ item.price }}元</p>
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    filterText: '',
    fruits:[
      {
        name: '蘋果',
        price: 20
      },
      {
        name: '香蕉',
        price: 15
      },
      {
        name: '鳳梨',
        price: 35
      },
    ]
  },
  computed:{
    filterArray: function(){
      return this.fruits.filter((item)=>{
        return item.name == this.filterText
      })
    }
  }
});
```

-----------------------------------------------
* 時間格式化。
```html
<div id="app">
  {{ formatDate }}
</div>
```
```js
const app = new Vue({
  el:'#app',
  computed:{
    formatDate: function(){
      let nowDate = new Date();
      let yyyy = nowDate.getFullYear();
      let mm = String(nowDate.getMonth() + 1).padStart(2, '0');
      let dd = String(nowDate.getDate()).padStart(2, '0');
      return `今天是，${yyyy}年${mm}月${dd}日`
    }
  }
});
```