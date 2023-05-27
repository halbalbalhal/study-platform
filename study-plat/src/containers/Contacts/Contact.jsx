import styles from './Contacts.module.css'

import ContactsInfo from '../../components/ContactsInfo/ContactsInfo'
import { getCourse, getCourses } from '../../firebase/coursesService'
import { getTask, getTasks } from '../../firebase/tasksService'
import Header from "../../components/Header";

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
        <div className={styles.group}>
            <Header />
            <ContactsInfo />
        </div>
    )
}

export default Contact