---
title: Vue2課程(2)：vue模板語法
date: 2021-06-02
tags: ["Vue2"]
---
## v-text
* 使用`v-text`可將資料裡的"文字"帶入<標籤>，簡化寫法 **{{}}**。
```html
<div id="app">
  <p v-text="apple"></p>
  <p>{{banana[0]}}</p>
  <p>{{pineapple.name}}</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    apple: '蘋果',
    banana: ['香蕉'],
    pineapple:{
      name:'鳳梨'
    }
  }
});
```
輸出結果：
```html
<div id="app">
  <p>蘋果</p>
  <p>香蕉</p>
  <p>鳳梨</p>
</div>
```

-----------------------------------------------
* v-text + substring()截取過長自串
```html
<div id="app">
  <!-- 從第幾個開始擷取自串,截取到從前面數過來第幾個 -->
  {{apple.substring(1,3)}}
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    apple: '青森蘋果',
  }
});
```
輸出結果：
```html
<div id="app">
  <p>森蘋</p>
</div>
```

-----------------------------------------------
* 可以直接在{{}}內進行計算。
```html
<div id="app">
  <p>優惠價：<span>{{discount*100}}折</span>{{parseInt(price*discount)}}元</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    price: 360,
    discount: 0.79,
  }
});
```
輸出結果：
```html
<div id="app">
  <p>優惠價：<span>79折</span>284元</p>
</div>
```

-----------------------------------------------
## v-html
* 使用`v-html`可將資料裡的HTML帶入<標籤>。
* 注意：不建議在網頁上任意使用v-html，因為會容易遭受XSS攻擊，例如:輸入框。
```html
<p v-html="apple"></p>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    apple:'<span class='apple'>蘋果</span>'
  }
});
```
輸出結果：
```html
<div id="app">
  <p><span class="apple">蘋果</span></p>
</div>
```

-----------------------------------------------
## v-if和v-show差異
* v-show是用display:none去做切換，而v-if是直接讓DOM元素消失只留下註解。
```html
<div id="app">
  <p v-if="false">這段字要出現還是不出現？</p>
  <p v-show="false">這段字要出現還是不出現？</p>
</div>
```

-----------------------------------------------
* v-if、v-else適合用在只有兩種結果時
```html
<div id="app">
  <p v-if="showApple">蘋果</p>
  <p v-else>香蕉</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    showApple: true
  }
});
```
輸出結果：
```html
<div id="app">
  <p>蘋果</p>
</div>
```

-----------------------------------------------
* v-if、v-else-if適合用在三種結果時
```html
<div id="app">
  <p v-if="showName == 'apple'">蘋果</p>
  <p v-else-if="showName == 'banana'">香蕉</p>
  <p v-else-if="showName == 'pineapple'">鳳梨</p>
</div>
```
```js
const app = new Vue({
  el: '#app',
  data:{
    showName: 'pineapple'
  }
});
```
輸出結果：
```html
<div id="app">
  <p>鳳梨</p>
</div>
```

