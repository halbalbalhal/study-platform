import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBnwATRdFN-VZhbJqJ28ssHqoIf3XtxcEM",
    authDomain: "study-plat.firebaseapp.com",
    projectId: "study-plat",
    storageBucket: "study-plat.appspot.com",
    messagingSenderId: "489863604257",
    appId: "1:489863604257:web:d064352b24cb56bc5edb60"
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const analytics = getAnalytics(app)

if (analytics) {
    console.log(
        "Google Analitycs is working succesfully"
    )
}