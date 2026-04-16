---
title: JS核心篇(4)：原始型別與物件型別
date: 2021-03-04
tags: ["JavaScript"]
---
## 原始型別(Primitive Data Type)
|typeof|中文|說明|
|---|---|---|
|Boolean|布林值|true、false|
|Number|數字|1234567890、NaN、Infinity|
|String|字串|''或""內的文字|
|Null|空值|曾經被賦予值，但是沒有值|
|Undefined|未定義|尚未被賦予值|
|Biglnt|符號/唯一值|表示超大整數，如 123456789n|
|Symbol|唯一符號|表示唯一識別符，可作物件 key，無法被重複|

`Biglnt是處理金融、加密、天文，例如:const big = 1234567890123456789012345678901234567890n;`

-----------------------------------------------
* 字串
```js
const a = "蘋果";
console.log(typeof a);  //string
```

-----------------------------------------------
* 數字
```js
const a = 3.1415;
console.log(typeof a);  //number
```
-----------------------------------------------
* 布林值
```js
const a = true;
console.log(typeof a);  //boolean
```

-----------------------------------------------
* 未定義
```js
const a;
console.log(typeof a);  //undefined
```

-----------------------------------------------
* 空值
* null`型別為object，歷史錯誤`
```js
const a = null;
console.log(typeof a);  //object
```

-----------------------------------------------
## 物件型別(Object Type)
|typeof|中文|說明|
|---|---|---|
|Object|物件|{}內的值|
|Object|陣列|[]內的值|
|function|函式|物件裡的子型別|
|Object|new String()|包裹方式建立的型別|
|Object|new Number()|包裹方式建立的型別|
|Object|new Boolean()|包裹方式建立的型別|

-----------------------------------------------
* 物件
```js
const apple = {
  name: '蘋果'
};
console.log(typeof apple);  //object
```

-----------------------------------------------
* 陣列
```js
const apple = ["蘋果"];
console.log(typeof apple);  //object
```

-----------------------------------------------
* 函式
```js
const apple = function(){};
console.log(typeof apple);  //function
```

-----------------------------------------------
## 動態型別
* 當變數在執行階段被賦予值時，可能會轉換型別。而轉換分為以下兩種:
* 顯性轉換：直接賦予新的值
```js
let apple = '蘋果';
apple = 1;
console.log(typeof apple);  //number
```

-----------------------------------------------
* 隱性轉換：數字跟字串**相加**，結果會是**字串**。
```js
const a = 1;
const b = '2';
console.log(a + b ,typeof (a + b)); //12,string
```

-----------------------------------------------
* 隱性轉換：數字跟字串**相乘**，結果會是**數字**。
```js
const a = 1;
const b = '2';
console.log(a * b ,typeof (a * b)); //2,number
```

-----------------------------------------------
## 型別轉換方法
* 使用 **parseInt()** 可將字串轉數字。
```js
const a = '100';
parseInt(a);
console.log(a, typeof a);  //100,number
```

-----------------------------------------------
* 使用 **.toString** 可轉數字轉字串。
```js
const a = 100;
a.toString();
console.log(a, typeof a);  //100,string
```

-----------------------------------------------
## 字串型別的應用
* 使用 **.length** 可取得字數(空白也算)。
```js
const apple = '青森蘋果'
console.log(apple.length);  //4
```

-----------------------------------------------
* 使用 **.trim()** 可以濾掉 **前後** 空白。
```js
const apple = "  青森 蘋果    ";
apple.trim();
console.log(apple);  //青森 蘋果
```