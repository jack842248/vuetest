import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDOw_MA1_uwRnWWhtZf-4zMiDqeM1KOaDc",
    authDomain: "myblog-2ec13.firebaseapp.com",
    projectId: "myblog-2ec13",
    storageBucket: "myblog-2ec13.firebasestorage.app",
    messagingSenderId: "12396778086",
    appId: "1:12396778086:web:48dc82ce3897b2867f13a7",
    measurementId: "G-B1P8MTVQW6"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)