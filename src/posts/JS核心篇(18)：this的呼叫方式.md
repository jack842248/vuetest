---
title: JS核心篇(18)：this的呼叫方式
date: 2021-03-18
tags: ["JavaScript"]
---
## this
* 是一個關鍵字，當執行函式時自動產生，不需要宣告。
* this不是看 **在哪裡定義**，而是看 **怎麼被呼叫**。

|呼叫方法|例如|this指向|
|---|---|---|
|簡易呼叫|fn();|this = window / undefined|
|方法呼叫|obj.fn();|this = obj|
|建構式呼叫|new Fn();|this = obj|
|強制綁定|fn.call(obj)|this = obj|

-----------------------------------------------
* 用var宣告的變數 = window下的變數 = this的變數
```js
var apple = '蘋果';
  function sayApple(){
    console.log(this.apple);
  }
sayApple();
```

-----------------------------------------------
* 函式在物件下執行，this等於該物件。
```js
const apple = '蘋果';
function sayApple(){
  console.log(this.apple);
}
const fruits = {
  apple: '青森蘋果',
  sayApple: sayApple
}
fruits.sayApple(); //青森蘋果
```

-----------------------------------------------
## 簡易呼叫(Simple Call)
* 直接執行的函式，稱為 **簡易呼叫** 。
```js
const name = '蘋果';
function sayApple(){
  console.log(this.name);
}
sayApple(); //蘋果
```

-----------------------------------------------
## 方法呼叫(Method Call)
```js
const name = '蘋果';
const apple = {
  name: '青森蘋果',
  sayApple: function(){
    console.log(this.name);
  }
};
apple.sayApple(); //青森蘋果
```

-----------------------------------------------
## 回呼函式呼叫(Callback Call)
```js
const name = '蘋果'
const apple = {
  name: '青森蘋果',
  sayApple: function() {
    const self = this;
    setTimeout(function(){
      console.log(self.name);
    })
  }
}
apple.sayApple(); //青森蘋果
```

-----------------------------------------------
## 強制綁定(call、apply、bind)
* 傳入的第一個值：會以 **建構式** 帶入 **this** 。
* 傳入的第二個值：會帶入參數。
* 在 **非嚴格模式** 下，如果傳入的值是 **null** 或 **undefined** 將會被置換成全域變數。
* 簡易呼叫的 **this** 盡可能不要調用，他的本質其實是 **undefined** 。

|傳入的值|物件|數字|字串|布林值|undefined、null、null|
|---|---|---|---|---|---|
|帶入方式|new Object()|new Number()|new String()|new Boolean()|window|
```js
function sayApple(a,b){
  console.log(this,a,b); //window,蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple('蘋果','香蕉'); 
```

-----------------------------------------------
* call()將傳入的值帶入參數，直接執行。
```js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple.call(fruits,'蘋果','香蕉'); 
```

-----------------------------------------------
* apply()將傳入的值以陣列方式帶入參數，直接執行。
```js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

sayApple.apply(fruits,['蘋果','香蕉']); 
```

-----------------------------------------------
* bind()將傳入的值帶入參數，但還 **不會執行** ，要再加()才會執行，若再帶入值，則會依需填補空缺，不會覆蓋。
```js
function sayApple(a,b){
  console.log(this,a,b); //{name: '蘋果'},蘋果,香蕉
}

const fruits = {
  name: '蘋果'
}

const bindSayApple = sayApple.bind(fruits,'蘋果','香蕉');
bindSayApple();
```

-----------------------------------------------
## DOM元素的this
* 取得按鈕的this：點擊按鈕時，會得到"button"。
```html
<button type="button" onclick="console.dir(this)">按鈕</button>
```

-----------------------------------------------
* 取得項目清單的this：點擊li時，會得到該元素的文字內容。
```html
<ul>
  <li>蘋果</li>
  <li>香蕉</li>
  <li>鳳梨</li>
</ul>
```
```js
const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function() {
    console.log(this.textContent);
  });
}
```