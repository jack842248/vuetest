---
title: JS核心篇(30)：Async
date: 2021-03-30
tags: ["JavaScript"]
---
## fetch
```js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async() => {
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('成功', data);
    } catch (error) {
        console.log('沒有成功', error);
    }
}
getData();
```

-----------------------------------------------
## axios
```js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async() => {
    try {
        const res = await axios.get(apiUrl);
        console.log('成功',res);
    } catch (error) {
        console.log('沒有成功',error);
    }
}
getData();
```

-----------------------------------------------
## 進階範例：axios + 閉包
* 可支援打多種api
```js
const createRequest = (url) => {    
    return async (id) => {
        try {
            //判斷是否有帶入參數，若沒有就打url就好
            const res = await axios.get( id?`${url}/${id}`:url);
            console.log('成功:', res);
        } catch (error) {
            console.log('沒有成功:', error);
        }
    };
};
const getData1 = createRequest('https://jsonplaceholder.typicode.com/todos');
const getData2 = createRequest('https://jsonplaceholder.typicode.com/todos');
const getData3 = createRequest('https://randomuser.me/api/');
getData1(1);
getData2(2);
getData3();
```


-----------------------------------------------
## 將try跟catch拆開
```js
const getData = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
}

const catchError = (promise) => {
    return promise.catch((error)=>{
        console.log('沒有成功',error);
    })
}

catchError(getData());
```

-----------------------------------------------
## 最終結合：執行多個api + 錯誤統一處理
```js
const catchError = (fn) => {
    //用...arg來接收所有參數
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (error) {
            console.log('沒有成功:', error);
        }
    };
};

const createRequest = (url) => {
    return async (id) => {
        const finalUrl = id ? `${url}/${id}` : url;
        const res = await axios.get(finalUrl);
        console.log('成功:', res);
        return res;
    };
};

const getTodo = catchError(
    createRequest('https://jsonplaceholder.typicode.com/todos')
);

const getUser = catchError(
    createRequest('https://randomuser.me/api/')
);

getTodo(1);
getTodo(2);
getUser();
```
