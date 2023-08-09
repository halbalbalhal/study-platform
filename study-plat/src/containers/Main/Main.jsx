import styles from './Main.module.css'
import { getCourse } from '../../firebase/coursesService'
import { getLessons } from '../../firebase/lessonsService'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Arrow from "../../components/Arrow"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/userService"
import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'
import Button from '../../components/Button/Button'

const Main = () => {
    const [course, setCourse] = useState(null)
    const [lessons, setLessons] = useState(null)
    const [userName, setUserName] = useState()
    const [render, setRender] = useState(0)

    if(!render){
        onAuthStateChanged(auth, (user) => {
            setUserName(user.displayName)
            setRender(1)
        })
    }

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

            {
                !userName &&
                <div id='blocker' className={styles.blocker}>
                    <PictureWithText text='You must create an account if you want to watch' />
                    <div>
                        <a href='/signup'><Button title='Sign up' /></a>
                    </div>
                </div>
            }

            <div className={styles.container}>
                <div className={styles.column}>
                    <iframe
                        src="https://www.youtube.com/embed/kUMe1FH4CHE"
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        width={'90%'}
                    ></iframe>

                    <div className={styles.description}>
                        <span className={styles.description__title}>{course != null && course.title}</span>
                        <p className={styles.description__text}>{course != null && course.description}</p>
                    </div>
                </div>

                <div className={styles.lessons} id='lessons'>
                    {lessons && lessons.map((lesson) => {
                        return (
                            <>
                            <div key={lesson.id} className={styles.lesson}>
                                <span key={lesson.id} className={styles.lesson__title}>{lesson.title}</span>
                                <Arrow id={lesson.id} onClick={() => {
                                    
                                }} />
                            </div>  
                            </>
                        )
                    })}
                    <div className={styles.lessons__close}>
                        <Button title='Close' tapEvent={() => {
                            document.getElementById('lessons').style.display = 'none'
                            document.getElementById('hambles').style.display = 'block'
                        }} />
                    </div>      
                </div>

                <div className={styles.hamburger__lessons} id='hambles' onClick={() => {
                    document.getElementById('lessons').style.display = 'flex'
                    document.getElementById('hambles').style.display = 'none'
                }}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

            </div>
        </>
    )
}

export default Main