---
title: Vue2課程(3)：v-for列印資料
date: 2021-06-03
tags: ["Vue2"]
---
## v-for
* 使用 **v-for** 可用來迴圈渲染陣列或物件。
* 常搭配 **index** 與 **:key** 使用，確保DOM更新效率。

-----------------------------------------------
* v-for陣列，第一個參數是item **每一筆資料**，第二個參數是index **索引位置** 。
```html
<div id="app">
  <ul>
    <li v-for="(item, index) in fruits">{{ index }}{{ item.name }}</li>
  </ul>
</div>
```
```js
const app = new Vue({
  el:'#app',
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
  }
});
```
輸出結果：
```html
<div id="app">
  <ul>
    <li>0蘋果</li>
    <li>1香蕉</li>
    <li>2鳳梨</li>
  </ul>
</div>
```

-----------------------------------------------
* v-for列印陣列，並加上v-if條件判斷。
```html
<div id="app">
  <ul>
    <li
      v-for="(item, index) in fruits"
      v-if="item.price <= 20">{{ item.name }}
    </li>
  </ul>
</div>
```
```js
const app = new Vue({
  el:'#app',
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
  }
});
```
輸出結果：
```html
<div id="app">
  <ul>
    <li>蘋果</li>
    <li>香蕉</li>
  </ul>
</div>
```

-----------------------------------------------
* v-for列印陣列，在input輸入資料進行查詢。
```html
<div id="app">
  <input type="text" v-model="filterText" @keyup.enter="filterData">
  <p v-for="(item, index) in filterArray">{{ item.price }}元</p>
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    filterText: '',
    filterArray: [],
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
  methods:{
    filterData: function(){
      this.filterArray = this.fruits.filter((item)=>{
        return item.name == this.filterText
      })
    }
  }
});
```

-----------------------------------------------
* 使用Vue.set(target,key,value)強制修改v-for資料。
```html
<div id="app">
  <button type="button" @click="changeData">按鈕</button>
  <ul>
    <li v-for="(item, index) in fruits">{{ item.name }}{{ item.price }}元</li>
  </ul>
</div>
```
```js
const app = new Vue({
  el:'#app',
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
  methods:{
    changeData: function(){
      //這段方法會無效
      // this.fruits[0] = {
      //   name: '青森蘋果',
      //   price: 40
      // }
      Vue.set(this.fruits,0,{
        name: '青森蘋果',
        price: 40
      })
    }
  }
});
```
輸出結果：
```html
<div id="app">
  <ul>
    <li>青森蘋果40元</li>
    <li>香蕉15元</li>
    <li>鳳梨35元</li>
  </ul>
</div>
```

-----------------------------------------------
* v-for物件，第一個參數是value值， 第二個參數是key屬性名稱，第三個參數是index索引位置。
```html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in apple">{{value}}{{key}}{{index}}</li>
  </ul>
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    apple:{
      name:'蘋果',
      color: '紅色',
      price: 20
    }
  }
});
```
輸出結果：
```html
<div id="app">
  <ul>
    <li>蘋果name0</li>
    <li>紅色color1</li>
    <li>20price2</li>
  </ul>
</div>
```

-----------------------------------------------
* v-for純數字
```html
<div id="app">
  <ul>
    <li v-for="item in 6">{{ item }}</li>
  </ul>
</div>
```
輸出結果：
```html
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>
</div>
```