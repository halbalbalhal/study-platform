import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {app} from './firebaseConfig'

const auth = getAuth(app)

export const createAccount = async (email, password, completion) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            completion(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
}

export const login = (email, password, completion) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid

            console.log(userId)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
}