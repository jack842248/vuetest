---
title: Vue2課程(5)：v-model綁定表單
date: 2021-06-05
tags: ["Vue2"]
---
## v-model
* 使用 **v-model** 可將表單與資料進行雙向綁定。

-----------------------------------------------
* input輸入框
```html
<div id="app">
  <input type="text" v-model="apple">
  {{apple}}
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果'
  }
});
```
輸出結果：
```html
<div id="app">
  <input type="text" v-model="apple">
  "蘋果"
</div>
```

-----------------------------------------------
* 如果在輸出標籤上加上 **v-onec** 只綁定初次綁定v-model的值。
```html
<div id="app">
  <input type="text" v-model="apple">
  <div v-once>{{ apple }}</div>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果'
  }
});
```

-----------------------------------------------
* 綁定textarea多行文字
```html
<div id="app">
  <textarea v-model="textAreaValue"></textarea>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    textAreaValue: '蘋果'
  }
});
```

-----------------------------------------------
* 綁定checkbox單選
```html
<div id="app">
  <input type="checkbox" v-model="isSubscription">是否訂閱電子報
  {{ isSubscription }}
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    isSubscription: false
  }
});
```

-----------------------------------------------
* 綁定checkbox單選，並改變原有true和false結果。
```html
<div id="app">
  <input type="checkbox" v-model="isSubscription" true-value="同意" false-value="取消">
  {{ isSubscription }}訂閱電子報
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    isSubscription: "同意"
  }
});
```

-----------------------------------------------
* 綁定checkbox多選
* 一定要預先給在data定義好，並且給陣列，勾選的會加入到陣列裡。
```html
<div id="app">
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="蘋果">蘋果
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="香蕉">香蕉
  <input type="checkbox" name="favoriteFruit" v-model="checkboxValue" value="鳳梨">鳳梨
  <br>
  你選擇的是：{{ checkboxValue }}
</div>  
```
```js
const app = new Vue({
  el: '#app',
  data: {
    checkboxValue: []
  }
})
```

-----------------------------------------------
* 綁定radio單選
```html
<div id="app">
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="蘋果">蘋果
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="香蕉">香蕉
  <input type="radio" name="favoriteFruit" v-model="radioValue" value="鳳梨">鳳梨
  <br>
  你選擇的是：{{ radioValue }}
</div>  
```
```js
const app = new Vue({
  el: '#app',
  data: {
    radioValue: ''
  }
})
```

-----------------------------------------------
* 綁定select下拉選單
```html
<div id="app">
  <select v-model="selectValue">
    <option value="" disabled >-- 請選擇 --</option>
    <option value="蘋果">蘋果</option>
    <option value="香蕉">香蕉</option>
    <option value="鳳梨">鳳梨</option>
  </select>
  <br>
  你選擇的是：{{ selectValue }}
</div>  
```
```js
const app = new Vue({
  el: '#app',
  data: {
    selectValue: ''
  }
})
```