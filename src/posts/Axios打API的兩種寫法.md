---
title: Axios打API的兩種寫法
date: 2026-03-28
tags: ["Vue3"]
---
## 第一種Promise

```js
axios.get('https://randomuser.me/api/')
    .then(res =>{
        return axios.get('https://randomuser.me/api/');
    })
    .catch(err => {
        console.log(err.message);
    })
```

-----------------------------------------------
## 第二種async、await

```js
async function getData(){
    try{
        const res = await axios.get('https://randomuser.me/api/')
    }catch(error){
        console.log(err.message);
    }
}
```