---
title: JS核心篇(3)：ASI自動插入分號
date: 2021-03-03
tags: ["JavaScript"]
---
## ASI（Automatic Semicolon Insertion）
* 當語法需要分號但程式碼沒有寫時，JavaScript 會「在特定情況下」自動補上分號，讓程式可以正常執行。
```js
const a = 1
const b = 2

//------js會自動幫你變成-----

const a = 1;
const b = 2;
```

-----------------------------------------------
* 新的一行是 `(`、`[`、`/` 開始 (容易出錯的地方)
```js
const b = a
(a + b).toString()

const a = 1
[1,2,3].forEach(...)

const b = a
/test/.test(b)

//------js會自動幫你變成-----

const b = a(a + b).toString()

const a = 1[1,2,3].forEach(...)

const b = a / test / .test(b)
```
正確解法：
```js
const b = a;
(a + b).toString()

const a = 1;
[1,2,3].forEach(...)

const b = a;
/test/.test(b)
```

-----------------------------------------------
* 兩個立即函式：
```js
(function() {})()
(function() {})()

//------js會自動幫你變成-----

(function() {})()(function() {})()
```
正確解法：
```js
(function() {})();
(function() {})();
```

-----------------------------------------------
*  新的一行以 `,`、`.` 作開始 (需注意執行結果)
```js
const b = a
.toString()

const a = 1
,b = 2

//------js會自動幫你變成-----

const b = a.toString()

const a = 1, b = 2
```
正確解法：
```js
const b = a;
.toString()

const a = 1;
,b = 2
```
