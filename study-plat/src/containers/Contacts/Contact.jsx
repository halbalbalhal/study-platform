import styles from './Contacts.module.css'

import ContactsInfo from '../../components/ContactsInfo/ContactsInfo'
import { getCourse, getCourses } from '../../firebase/coursesService'
import { getTask, getTasks } from '../../firebase/tasksService'
import Header from "../../components/Header";

const Contact = () => {
    return (
        <div className={styles.group}>
            <Header />
            <ContactsInfo />
        </div>
    )
}

export default Contact