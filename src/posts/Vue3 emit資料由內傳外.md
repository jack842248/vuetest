---
title: Vue3 emit資料由內傳外
date: 2026-03-30
tags: ["Vue3"]
---
## 內層按鈕改變外層標題

* 口訣：前內後外

```vue
//Button.vue

<template>
  <button type="button" @click="emitTitle()">按鈕</button>
</template>


<script setup>
import { ref } from 'vue';

const emit = defineEmits(['editTitle']) // 定義事件名稱

const title = ref("這是要傳的標題");

const emitTitle = ()=> {
  emit('emitTitle',title.value); // 傳遞事件名稱, 參數
}
</script>
```
外層接收：
```vue
//ProductsView.vue

<template>
  <h2>{{ pageTitle }}</h2>
  <Button @emitTitle="editTitle()"></Button>
</template>


<script setup>
import { ref } from 'vue';
import Button from '@/component/Button.vue'

const pageTitle = ref("關於我們");

const editTitle = (newTitle)=> {
  pageTitle.value = newTitle
}
</script>
```