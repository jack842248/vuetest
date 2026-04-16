---
title: JS核心篇(7)：運算子的相等性
date: 2021-03-07
tags: ["JavaScript"]
---
## 嚴格相等(Strict Equals)
* 連續三個等號，**值** 和 **型別** 都要相同，才會成立。
```js
console.log(1 === 1);  //true
console.log(1 === "1");  //false
console.log(1 === true);  //false

/** 例外案 **/
console.log(NaN === NaN);  //false
console.log(+0 === -0);  //true
console.log(null === undefined);  //false

const a = 1;
const b = new Number(1);
console.log(a === b); //false

/** 進階範例 **/
console.log(a = 1 + 1 === 1);  //false
//1 + 1 = 2;
//2 === 1 = false;
//a = false;
```

-----------------------------------------------
## 寬鬆相等(Loose Equals)
* 連續二個等號，只要 **值** 相同就會成立。
```js
console.log(1 == 1);  //true
console.log(17 == "0x11");  //true，16+1 

/** true會變成1，false會變成0 **/
console.log(true == 1);  //true
console.log(false == 0); //true

/** 字串與數字相比時會以包裹方式Number() **/
console.log("1" == true);  //true
console.log("0" == false);  //true
console.log(1 == "1");  //true
console.log(1 == true);  //true
console.log('1' == !0);  //true，0是false，但前面加上!會變true

/**  null跟undefined不會被轉為數字型別 **/
console.log(Number(null));  //0
console.log(Number(undefined));  //NaN
console.log(null == 0);  //false
console.log(undefined == 0)  //false
console.log(null == undefined);  //true
```

-----------------------------------------------
## 物件與非物件的比對
* 物件與非物件做比對時，是使用 **包裹物件** 做轉換。
* 陣列與數字相比時會自動去掉 **[]** 。
```js
console.log(1 == ["1"]);  //true
console.log("1" == [1]);  //true
console.log("A" == ['A']);  //true
console.log([1] == true);  //true

const a = 1;
const b = new Number(1);
console.log(a == b); //true
```

-----------------------------------------------
## 物件與物件的比對
* 物件與物件相比時，會是false。
```js
console.log([] == []); //false
console.log({} == {});  //false
```

-----------------------------------------------
## 物件傳參考性質
```js
const a = {};
const b = a;
console.log(a === b); //true
```