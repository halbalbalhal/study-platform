import { db } from './firebaseConfig'
import { getObject, getObjects } from '../utils/requestUtil'
import { doc, collection } from 'firebase/firestore'

export const getTasks = (courseId, lessonId, completion) => {
    const colRef = collection(db, "courses", courseId, "lessons", lessonId, "tasks")

    getObjects(colRef, completion)
}

export const getTask = (courseId, lessonId, taskId, completion) => {
    const docRef = doc(db, "courses", courseId, "lessons", lessonId, "tasks", taskId)

    getObject(docRef, completion)
}