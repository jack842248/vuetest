<template>
    <div class="bg-neutral-900/90 w-full h-screen">
        <div class="container mx-auto my-5">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="flex flex-col w-3xs">
                    <h1 class="text-neutral-500 text-lg text-center mb-1 tracking-wider">Access My Portfolio</h1>
                    <form @submit.prevent="login" class="flex flex-col">
                        <input
                            v-model="password"
                            type="password"
                            placeholder="請輸入履歷上面提供的密碼"
                            class="bg-white rounded mb-1 p-2"/>
                        <button
                            type="submit"
                            class="bg-emerald-700 hover:bg-emerald-800 rounded text-neutral-100 text-sm py-2">確認送出
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from "@/firebaseConfig.js"
import { signInWithEmailAndPassword } from "firebase/auth"

const email = ref("jack842248@gmail.com")
const password = ref('')
const router = useRouter()

const login = async() => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
            router.push("/project") // 登入成功跳轉
            localStorage.setItem('loggedIn', 'true')
    } catch (error) {
        console.error("登入失敗:", error)
        alert("登入失敗")
        password.value = ""
    }
}
</script>