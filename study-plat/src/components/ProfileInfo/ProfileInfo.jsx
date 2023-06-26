import styles from './ProfileInfo.module.css'

import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/userService"

import Button from '../Button/Button'
import PictureWithText from '../Signup&Login/PictureWithText/PictureWithText'

import profileicon from '../../assets/images/Profile/profileicon.svg'
import complete from '../../assets/images/Profile/complete.svg'
import uncomplete from '../../assets/images/Profile/uncomplete.svg'

const ProfileInfo = () => {

    const [userName, setUserName] = useState()
    const [render, setRender] = useState(0)
    const [post, setPost] = useState()

    if(!render){
        onAuthStateChanged(auth, (user) => {
            setUserName(user.displayName)
            setRender(1)

            setPost(user.email)
        })
    }

    return (
        <section className={styles.profile}>
            <div className={styles.profile__wrapper}>
                <div className={styles.profile__info}>
                    <img src={profileicon} alt="didn't find"  />
                    <div className={styles.profile__inputs}>
                        {
                            userName &&
                            <textarea value={userName} spellCheck="false" readOnly></textarea>
                        }
                        {
                            post &&
                            <textarea value={post} spellCheck="false" readOnly></textarea>
                        }
                        <Button title='Log Out' onClick = {() => {
                            window.location = '/signup'
                        }} />
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
                            <a href='/contact'><Button title='Contact Us'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo