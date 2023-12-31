import { db } from './firebaseConfig'
import { getObject, getObjects, setObject } from '../utils/requestUtil'
import { doc, collection } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth"


export const auth = getAuth()
export const GoogleProvider = new GoogleAuthProvider()
export const FacebookProvider = new FacebookAuthProvider()

export const getUser = (id, completion) => {
    const docRef = doc(db, "users", id)

    getObject(docRef, completion)
}

export const createUser = (id, name, email, completion) => {
    const docPath = doc(db, "users", id)

    setObject(docPath, {
        id: id,
        name: name,
        email: email
    }, completion)
}

