---
title: ref與reactive差別
date: 2026-03-26
tags: ["Vue3"]
---
## Ref

取值、賦予值的方式

* 優點：適用全部情境
* 缺點：要打上 .value

```vue
<script setup>  

import { ref } from 'vue'

const num = ref(0);

setInterval(()=>{
  num.value = num.value++
},3000)

</script>
```

-----------------------------------------------
## Reactive

* 優點：不用加上 .value
* 缺點：不能使用純值

```vue
<script setup>  

import { relative } from 'vue'

const apple = reactive('蘋果')

</script>
```

* 缺點：不能被賦予
```vue
<script setup>  

import { relative } from 'vue'

let data = relative({
  name: '蘋果'
})

data = {
  name: '香蕉'
}

</script>
```


