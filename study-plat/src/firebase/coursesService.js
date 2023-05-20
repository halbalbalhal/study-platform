import { db } from './firebaseConfig'
import { getObject, getObjects } from '../utils/requestUtil'
import { doc, collection } from 'firebase/firestore'

export const getCourses = (completion) => {
    const colRef = collection(db, "courses")

    getObjects(colRef, completion)
}

export const getCourse = (courseId, completion) => {
    const docRef = doc(db, "courses", courseId)

    getObject(docRef, completion)
}