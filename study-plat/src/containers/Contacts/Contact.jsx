import styles from './Contacts.module.css'

import Header from '../../components/Header/Header'

import ContactsInfo from '../../components/ContactsInfo/ContactsInfo'
import { getCourse, getCourses } from '../../firebase/coursesService'
import { getTasks, getTask } from '../../firebase/tasksService'

const Contact = () => {
    getTask(
        "web",
        "first_lesson",
        "4smb75Orsex2BFif3MqZ",
        (data) => {
            console.log(data)
        }
    )

    getTasks(
        "web",
        "first_lesson",
        (data) => {
            console.log(data)
        }
    )

    return (
        <>
            <Header />
            <ContactsInfo />
        </>
    )
}

export default Contact