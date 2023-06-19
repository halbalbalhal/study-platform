import styles from './Main.module.css'
import { getCourse } from '../../firebase/coursesService'
import { getLessons } from '../../firebase/lessonsService'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Arrow from "../../components/Arrow";

const Main = () => {
    const [course, setCourse] = useState(null)
    const [lessons, setLessons] = useState(null)

    if(course === null){
        getCourse('web', (course) => {
            setCourse(course)
        })
    }

    if(lessons === null){
        getLessons('web', (lessons) => {
            setLessons(lessons)
        })
    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.column}>
                    <iframe
                        src="https://www.youtube.com/embed/uw2EdOytA-o"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>

                    <div className={styles.description}>
                        <span className={styles.description__title}>{course != null && course.title}</span>
                        <p className={styles.description__text}>{course != null && course.description}</p>
                    </div>
                </div>

                <div className={styles.lessons}>
                    {lessons && lessons.map((lesson) => {
                        return (
                            <div key={lesson.id} className={styles.lesson}>
                                <span key={lesson.id} className={styles.lesson__title}>{lesson.title}</span>
                                <Arrow id={lesson.id} onClick={() => {}} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Main