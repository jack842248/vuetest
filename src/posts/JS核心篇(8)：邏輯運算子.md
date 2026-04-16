---
title: JS核心篇(8)：邏輯運算子
date: 2021-03-08
tags: ["JavaScript"]
---
## 邏輯運算子(&&、||、!) 

|邏輯運算子|英文|口語中文|說明|
|---|---|---|---|
|&&|AND|而且|左邊是`false`回傳結果，是`true`回傳右邊|
|\|\||OR|或者|左邊是`true`回傳結果，是`false`回傳右邊|
|!|NOT|不|`true`變`false`，`false`變`true`|

-----------------------------------------------
## &&
* 判斷左邊的值，是false就直接回傳，是true就回傳右邊。
```js
console.log(0 && 1);  //0
console.log(2 && 3);  //3

console.log(1 && 2 && 0); //0
//執行順序：由左至右
//1 && 2 --> 2
//2 && 0 --> 0

console.log(1 || 0 && 2 || 1); //1
//執行順序：先&&，再||
//0 && 2 --> 2
//1 || 2 --> 1
//1 || 1 --> 1
```

-----------------------------------------------
## ||
* 判斷左邊的值，是true就直接回傳，是false就回傳右邊。
```js
console.log(0 || 1);  //1
console.log(2 || 3);  //2

/** 進階範例三 **/
console.log(0 || 1 && 2 || 3);  //2
//1 && 2 = 2;
//0 || 2 = 2;
//2 || 3 = 2;
```

-----------------------------------------------
## ！(否定)
```js
console.log(!0);  //true
console.log(!1);  //false
console.log(![]);  //false
console.log(!true);  //false
console.log(3 != "3");  //false
console.log(3 !== "3");  //true
```

-----------------------------------------------
## 衍伸練習題
```js
let a = 1 + 1 === 1;
//執行順序：先+，再判斷===
console.log(a); //false

console.log(1000 < 10000 < 10); //true
//執行順序：由左至右
//1000 < 10000 --> true
//true < 10 --> true，因為true = 1
```

-----------------------------------------------
### 三元運算式範例：
```js
let myMoney = 500;
function addValue(cash){
  cash = parseInt(cash);
  console.log(cash);
  // 當 cash 是數值或為 0 時，使用 cash 的數值
  // 如果 cash 是 NaN 時，則直接套用 500
  cash = (cash || cash === 0)? cash: 500;
  let total = cash + myMoney;
  console.log('我有'+total+'元')
}
addValue(); // "我有1000元"
addValue(0); // "我有500元"
```

-----------------------------------------------
## 簡化賦值運算子
```js
let a = 1;
a = a + 1;
console.log(a);  //2

/** 簡化 **/
let a = 1;
a += 1;
console.log(a);  //2

/** 再簡化 **/
let a = 1;
a++;
console.log(a);  //2

/** 進階題 **/
let a = 10;
console.log(++a);// 11
console.log(--a);// 9
console.log(++a * a);// 121
console.log(--a * a);// 81
```