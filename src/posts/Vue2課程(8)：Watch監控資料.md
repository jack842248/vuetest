---
title: Vue2課程(8)：Watch監控資料
date: 2021-06-08
tags: ["Vue2"]
---
## watch
* 使用 **watch** 可監聽資料變化並執行動作。
* 適合用在非同步操作或副作用處理（例如 API 呼叫）。

-----------------------------------------------
* 監控資料變化，並在三秒後進行修改。
```html
<div id="app">
  <button type="button" @click="apple = '香蕉'">按鈕</button>
  {{ apple }}
</div>
```
```js
const app = new Vue({
  el:'#app',
  data:{
    apple: '蘋果'
  },
  watch:{
    apple: function(){
      setTimeout(()=>{
        this.apple = '蘋果'
      },3000)
    }
  }
});
```