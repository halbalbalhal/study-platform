import styles from './ProfileInfo.module.css'

import Button from '../Button/Button'
import PictureWithText from '../Signup&Login/PictureWithText/PictureWithText'

import profileicon from '../../assets/images/Profile/profileicon.svg'
import complete from '../../assets/images/Profile/complete.svg'
import uncomplete from '../../assets/images/Profile/uncomplete.svg'

import { getLessons } from '../../firebase/lessonsService'
// import { getUser } from '../../firebase/userService'


const ProfileInfo = () => {

    getLessons('web', (lessons) => {
        console.log(lessons)
    })

    // getUser('users', (component) => {
    //     console.log(component)
    // })

    return (
        <section className={styles.profile}>
            <div className={styles.profile__wrapper}>
                <div className={styles.profile__info}>
                    <img src={profileicon} alt="didn't find"  />
                    <div className={styles.profile__inputs}>
                        <textarea spellCheck="false" readOnly>Кирилл</textarea>
                        <textarea spellCheck="false" readOnly>post@gmail.com</textarea>
                        <a href='/signup'><Button title='Log Out' onClick = {() => {
                            window.location = '/signup'
                        }} /></a>
                    </div>
                </div>

                <div className={styles.profile__progress}>
                    <PictureWithText text='Check your progress' />
                    <div className={styles.profile__status}>
                        <span className={styles.profile__status__title}>Status</span>

                        <div className={styles.profile__lessons}>
                            <div className={styles.profile__lessons__result}>
                                <div className={styles.profile__lessons__number}>
                                    <span className={styles.lessons__text}>Lesson 1</span>
                                    <img src={uncomplete} alt="didn't find" />
                                </div>
                                <div className={styles.profile__lessons__line}>
                                    <div className={styles.profile__lessons__greenline}>
                                        {/* Greenline */}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profile__lessons__result}>
                                <div className={styles.profile__lessons__number}>
                                    <span className={styles.lessons__text}>Lesson 1</span>
                                    <img src={complete} alt="didn't find" />
                                </div>

                                <div className={styles.profile__lessons__line}>
                                    <div className={`${styles.profile__lessons__greenline} ${styles.full__lesson}`}>
                                        {/* Greenline */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile__status__contact}>
                            <span className={styles.profile__status__title}>Do you have any error?</span>
                            <Button title='Contact Us' onClick = {() => {
                                window.location.href='/contact'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo