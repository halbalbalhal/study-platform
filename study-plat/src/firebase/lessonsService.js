import { db } from './firebaseConfig'
import { getObject, getObjects } from '../utils/requestUtil'
import { doc, collection } from 'firebase/firestore'

export const getLessons= (courseId, completion) => {
    const colRef = collection(db, "courses", courseId, 'lessons')

    getObjects(colRef, completion)
}

export const getLesson = (courseId, lessonId, completion) => {
    const docRef = doc(db, "courses", courseId, 'lessons', lessonId)

    getObject(docRef, completion)
}