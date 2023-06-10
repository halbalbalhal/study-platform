import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {app} from './firebaseConfig'

const auth = getAuth(app)

export const createAccount = async (email, password, completion) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            completion(userCredential)
        })
        .catch((error) => {
            completion(error.code)
        })
}

export const login = (email, password, completion) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid

            completion(userId)
        })
        .catch((error) => {
            completion(error.code)
        })
}