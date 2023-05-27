import { db } from '../firebase/firebaseConfig'
import { getDoc, getDocs, setDoc } from 'firebase/firestore'

export const getObject = async (docRef, completion) => {
    const docSnap = await getDoc(docRef)

    completion(docSnap.data())
}

export const getObjects = async (colRef, completion) => {
    const docSnap = await getDocs(colRef)

    const docArray = []
    docSnap.forEach((snap) => {
        docArray.push(snap.data())
    })

    completion(docArray)
}

export const setObject = async (doc, data, completion) => {
    const result = await setDoc(doc, data)

    completion(result)
}