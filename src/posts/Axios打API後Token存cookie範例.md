---
title: Axios打API後Token存cookie範例
date: 2026-03-29
tags: ["Vue3"]
---
## 註冊
```vue
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const signupField = ref({
    email: '',
    password: '',
    nickname: '',
})

//顯示打api的結果訊息
const signRes = ref('')

const signup = async () => {
    try {
        const res = await axios.post(`${網址}/users/sign_up`, signupField.value)
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
}
</script>
```

-----------------------------------------------
## 登入

此範例情境為：登入帳號成功時會取得Token，為了下一次不用再輸入帳號密碼，將此通行證(Token)存在瀏覽器上，這樣一來下一次進入到此頁面，就可以先去驗證是否存有Token，若驗證成功了，就直接省略登入流程。
* expDate：Token過期時間，若拿到"秒數值"，例如：1774771424，必須先轉為毫秒，在使用`toUTCString`轉成cookie可讀的格式，例如：Tue, 26 Mar 2026 08:30:00 GMT

```vue
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const signinField = ref({
    email: '',
    password: '',
})

const signRes = ref('')

const signin = async () => {
    try {
        const res = await axios.post(`${網址}/users/sign_in`, signinField.value)
        signRes.value = res.data.token
        const expDate = new Date(res.data.exp * 1000)
        document.cookie = 
        ` 
          exampleToken=${res.data.token};
          expires=${expDate.toUTCString()};
          path=/
        `
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
}
</script>
```

-----------------------------------------------
## 驗證

在一進入頁面時把cookie拿去打api，看是否該Token是否還可通行

```vue
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted( async()=> {
    //取得cookie的正規式
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    try {
        const res = await axios.get(`${網址}/users/checkout`, {
            headers: {
                Authorization: token,
            },
        })
        signRes.value = res.data.token
    } catch (error) {
        signRes.value = error.response?.data?.message
    }
})
</script>
```

