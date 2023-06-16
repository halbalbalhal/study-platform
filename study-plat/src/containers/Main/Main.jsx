import styles from './Main.module.css'
import { getCourse } from '../../firebase/coursesService'
import { getLessons } from '../../firebase/lessonsService'
import { useState } from 'react'
import Header from '../../components/Header/Header'

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
            console.log(lessons)
            setLessons(lessons)
        })
    }

    const lessonClick = () => {
        document.querySelector('.' + styles.lesson__arrow).classList.toggle(styles.active)

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
                            <div className={styles.lesson} onClick={lessonClick}>
                                <span className={styles.lesson__title}>{lesson.title}</span>
                                <div className={styles.lesson__arrow}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Main