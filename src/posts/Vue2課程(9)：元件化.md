---
title: Vue2課程(9)：元件化
date: 2021-06-09
tags: ["Vue2"]
---
## 元件化
* 若沒有元件化時，點擊按鈕改變同一個資料。
```html
<div id="app">
  <button type="button" @click="counter++">{{ counter }}按鈕</button>
  <button type="button" @click="counter++">{{ counter }}按鈕</button>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    counter: 0
  }
});
```

-----------------------------------------------
* 元件化可以讓資料都個別獨立。
```html
<div id="app">
  <counter-button></counter-button>
  <counter-button></counter-button>
</div>
```
```js
Vue.component('counterButton',{
  data: function(){
    return{
      counter: 0
    }
  },
  template:`<button type="button" @click="counter++">{{ counter }}按鈕</button>`
})

const app = new Vue({
  el: '#app'
});
```










-----------------------------------------------
## vue + ajax 載入api資料(一串純文字)
```html
<div id="app">
  <p>{{text}}</p>
</div>
```
```js
const app = new Vue({
  el: "#app",
  data:{
    text: "這是預載入之前的文字"
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=notifydata",
      success: function(item){
        app.text = item;
      }
    })
  }
});
```
### 輸出結果：
```html
<div id="app">
  <p>哈囉!! 這邊是你用AJAX載入的純文字公告!!</p>
</div>
```

-----------------------------------------------
## vue + ajax 載入api資料(JSON)
```html
<div id="app">
  <h5 v-if="items.length==0">資料載入中...</h5>
  <ul>
    <li v-for="item in items">{{item.name}}${{item.price}}</li>
  </ul>
</div>
```
```js
const app = new Vue({
  el: "#app",
  data:{
    items: []
  },
  ready: function(){
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata",
      success: function(item){
        app.items = JSON.parse(item);
      }
    })
  }
});
```
`JSON.parse()是將JSON格式的字串解析為JavaScript物件或陣列`

-----------------------------------------------
## vue + ajax + new Date()日期格式計算
* 若要計算出「倒數剩餘天數」，利用開始時間-結束時間
```html
<div id="app">
  <div v-for="item in classDate">
    <div>剩{{ remainingDays }}天</div>
  </div>
</div>
```
```js
const app = new Vue({
    el: '#app',
    data:{
        classDate: [],
    },
    ready: function(){
        $.ajax({
            url: "https://awiclass.monoame.com/api/command.php?type=get&name=hahowdata",
            success: function(item){
                app.classDate = JSON.parse(item);
            }
        })
    },
    computed: {
        remainingDays: function(){
            for (let i=0;i<this.classDate.length;i++){
                return parseInt((new Date(this.classDate[i].proposalDueTime) - new Date(this.classDate[i].incubateTime)) / (1000 * 60 * 60 * 24));
            }
        }
    }
});
```
`將物件的日期格式使用new Date()即可相減做計算，將得到的值/毫秒(1000)/分鐘(60)/小時(60)/天(24)，最後再用parseInt()取得正整數`