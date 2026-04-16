---
title: Vue3 props資料由外傳內
date: 2026-03-30
tags: ["Vue3"]
---
## 把卡片資料由外傳入內

* 口訣：前內後外
  * content 是內層接收名稱
  * cardData 是外層傳遞名稱
* html屬性命名都是小駝峰
```vue
//ProductsView.vue

<template>
  <Card :content="cardData"></Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/component/Card.vue';

const cardData = ref({
  imgUrl: 'https://plus.unsplash.com/premium_photo-1668367779826-afc94d000060?q=80&w=2634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: '卡片標題',
  content: '卡片內容',
  link: 'https://www.youtube.com/' 
})
</script>
```
內層接收：
```vue
//Card.vue

<template>
  <div class="card" style="width: 18rem;">
    <img :src="content.imgUrl" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ content.title }}</h5>
      <p class="card-text">{{ content.content }}</p>
      <a href="content.link" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script setup>
import Card from '@/component/Card.vue';

defineProps(['content'])

//也可寫成
// const props = defineProps(['content']);
</script>
```