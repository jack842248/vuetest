---
title: JS核心篇(29)：Promise
date: 2021-03-29
tags: ["JavaScript"]
---
## Promise
* 本身是一個物件，有自己的方法。

|未確認|已確認|已實現|已否決|
|---|---|---|---|
|pending|settled|fulfilled|rejected|

-----------------------------------------------
## 建立Promise
* resolve: 回傳成功的結果。
* reject: 回傳失敗的結果。
* then: 接收成功的結果。
* catch: 接收失敗的結果。
```js
function getData(){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(false){
        res('成功');
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData()
  .then(res => {
    console.log(res);
  })
  .catch(rej => {
    console.log(rej); //失敗
  })
```

-----------------------------------------------
## Promise串接技巧(Promise chain)
* 前一個then回傳可讓下一個then繼續執行，若有其中then不成立，則直接跳至catch。
```js
function getData(){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(false){
        res('成功');
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData()
  .then(res => {
    console.log(res);
    return getData(3); //成功2
  })
  .then(res => {
    console.log(res); //成功3
    return getData(0); //這裡失敗所以，跳至catch
  })
  .catch(rej => {
    console.log(rej); //失敗
  })
```

-----------------------------------------------
* 若用一個then去接收兩個結果的話，第一個會是成功的結果，第二個會是失敗的結果。
```js
function getData(value){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(value){
        res(`成功${value}`);
      }else{
        rej('失敗');
      }
    },1000)
  })
}
getData(0)
  .then((res)=>{
    console.log(res); 
    return getData(1)
  },(rej)=>{
    console.log(rej); //失敗
    return getData(2)
  })
  .then((res)=>{
    console.log(res); 
    return getData(3)
  },(rej)=>{
    console.log(rej); //成功2
    return getData(4)
  })
```

-----------------------------------------------
## 一次取得所有Promise結果
* 將全部使用陣列方式帶入參數，如果全部都成功執行後，才會執行接下來要執行的的結果，
* 若有其中一個失敗，也會直接回傳失敗結果。
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  getData(1),
  getData(2),
  getData(3)
])
.then(res => {
  console.log(res); //['成功1', '成功2', '成功3']
})
.catch(rej => {
  console.log(rej);
})
```

-----------------------------------------------
## 取得最快回傳的Promise結果
* 只取得最快回傳的那一個結果。
* 最快的失敗才會回傳失敗的結果。
```js
function getData(value,time){
  return new Promise((res,rej) => {
    setTimeout(()=>{
      if(value){
        res(`成功${value}`);
      }else{
        rej('失敗');
      }
    },time)
  })
}
Promise.race([
  getData(1,3000),
  getData(2,2000),
  getData(3,1000) //這個秒數最短，最快回傳
])
.then(res => {
  console.log(res); //成功3
})
.catch(rej => {
  console.log(rej);
})
```

-----------------------------------------------
## 用Promise打api
```js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

function getData(url){
  return new Promise((res,rej)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.onload = function(){
      if(xhr.status == 200){
        console.log('成功');
      }else{
        console.log('失敗');
      }
    }
    xhr.send();
  })
}
getData(apiUrl)
  .then(res=>{
    console.log(res); //成功
  })
  .catch(rej=>{
    console.log(rej);
  })
```
