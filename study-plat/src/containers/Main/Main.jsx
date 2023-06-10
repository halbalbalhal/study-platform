import styles from './Main.module.css'

import { getCourse } from '../../firebase/coursesService'
import { getLessons } from '../../firebase/lessonsService'
import { useState } from 'react'

import Header from '../../components/Header/Header'

import arrowImg from '../../assets/icons/arrow-forward.svg'
const Main = () => {
    const [course, setCourse] = useState(null)
    const [lessons, setLessons] = useState([])

    // getCourse('web', (course) => {
    //     setCourse(course)
    // })
    //
    // getLessons('web', (lessons) => {
    //     console.log(lessons)
    //     setLessons(lessons)
    // })

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
                    {lessons.map((lesson) => {
                        return (
                            <div className={styles.lesson}>
                                <span className={styles.lesson__title}>{lesson.title}</span>
                                <img src={arrowImg} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Main