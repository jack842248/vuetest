---
title: Pinia狀態管理工具
date: 2026-03-31
tags: ["Vue3"]
---
## 環境起手式

pinia是狀態管理工具，需要統一資料的時候就可以使用
但如果是「分頁」元件就不適合，「購物車」就適合

```bash
$ npm i pinia
```
```js
//main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = create(App)

app.use.(pinia)
app.mount('#app')
```

-----------------------------------------------
## 引入store

在src底下建立store/exampleStore.js

```js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

//匯出
export const useExampleStore = defineStore('exampleStore',() => {
  //State
  const count = ref(1);

  //Getter
  const doubleCount = computed(() => {
     count.value * 2
  })

  //Action
  function increment() {
    count.value++
  }

  return{
    count,
    doubleCount,
    increment
  }
})
```
-----------------------------------------------
## 在元件使用

```vue
<template>
  {{ countStore.count }}
  <button type="button" @click="countStore.increment">累加</button>
</template>

<script setup>  

import { useCountStore } from './store/exampleStore.js'

const countStore = useCountStore();

</script >
```

-----------------------------------------------
## 在元件使用解構

```vue
<template>
  {{ count }},{{ doubleCount }}
  <button type="button" @click="countStore.increment">累加</button>
</template>

<script setup>  
import { useCountStore } from '@/store/exampleStore.js'
import { storeToRefs } from 'pinia'

const countStore = useCountStore();

//會失去響應式(不能連動)
const { count, doubleCount } = countStore

//正確解法
const { count, doubleCount } = storeToRefs(countStore)

//方法
const { increment } = countStore
</script >
```