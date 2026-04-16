---
title: 設定Router轉址到指定頁面
date: 2026-03-24
tags: ["Vue"]
---
## 404找不到頁面

* 一定要放在最後一筆路由

```js
// router.js
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=>import('../views/NotFoundView.vue') 
}
```
NotFoundView.vue：
```vue
<template>
    <h1>404 - 此頁面不存在</h1>
    <router-link to="/">回首頁</router-link>
</template>
```

-----------------------------------------------
## 轉址到指定頁面

若想讓使用者在輸入網址時，指定跳到"關於"頁面，可以照此做法：
* 用replace可避免讓使用者再回到404頁面

NotFoundView.vue：
```vue
<template>
    <h1>此頁面不存在</h1>    
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    router.replace('/about');
})
</script>
```

-----------------------------------------------
## 全部找不到直接轉址到指定頁：
```js
// router.js
{
  path: '/:pathMatch(.*)*',
  redirect: '/about'
}
```