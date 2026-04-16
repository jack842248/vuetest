---
title: JS核心篇(9)：真值與假值
date: 2021-03-09
tags: ["JavaScript"]
---
## 真值與假值對照表
[對照表查詢](https://dorey.github.io/JavaScript-Equality-Table/)
|判斷值|例如|
|---|---|
|真值|true 、 1 、 '1' 、 [] 、 {}|
|假值|false 、 0 、 '' 、 NaN 、 null 、 undefined|

-----------------------------------------------
## 真值(Truthy)
* 判斷式裡如果是**真值**，就會成立。
```js
if([]){
  console.log('蘋果');  //蘋果，因為[]是真值
}else{
  console.log('香蕉');
}

/** 特別案 **/
if(new Boolean(false)){
  console.log('蘋果'); //蘋果，因為{}是真值
}else{
  console.log('香蕉');  
}
```

-----------------------------------------------
## 假值(Falsy)
* 判斷式裡如果是**假值**，就會不成立。
```js
if(''){
  console.log('蘋果');
}else{
  console.log('香蕉');  //香蕉，因為''是假值
}
```