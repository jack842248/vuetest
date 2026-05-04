---
title: reduce加總
date: 2026-03-27
tags: ["JavaScript"]
---
## 基本語法

* 累加器（accumulator）：上一次計算的結果
* 當前元素（current）：現在正在處理的那一筆資料
* 初始值：一開始的「起點」

```js
array.reduce((累加器, 當前元素) => {
  return 新的累加器
}, 初始值)
```

-----------------------------------------------
## 純數字加總

```js
const arr = [1, 2, 3, 4]

const sum = arr.reduce((acc, cur) => {
  return acc + cur
}, 0)

console.log(sum)
```
-----------------------------------------------
## 簡寫版

```js
const total = data.reduce((acc, item) => acc + item.price, 0)
```

-----------------------------------------------
## 價格加總並且價格大於50

```js
const data = ref([
  { id: 1, name: "珍珠奶茶", price: 50 },
  { id: 2, name: "冬瓜檸檬", price: 45 },
  { id: 3, name: "翡翠檸檬", price: 55 },
  { id: 4, name: "四季春茶", price: 45 },
  { id: 5, name: "阿薩姆奶茶", price: 50 },
  { id: 6, name: "檸檬冰茶", price: 45 },
  { id: 7, name: "芒果綠茶", price: 55 },
  { id: 8, name: "抹茶拿鐵", price: 60 }
]);

const total = data.reduce((acc, item) => {
  if (item.price > 50) {
    return acc + item.price
  }
  return acc
}, 0)
```