import styles from './Profile.module.css'

import Header from '../../components/Header/Header'

import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../firebase/userService"
import { signOut } from 'firebase/auth'

import Button from '../../components/Button/Button'
import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'

import profileicon from '../../assets/images/Profile/profileicon.svg'
import complete from '../../assets/images/Profile/complete.svg'
import uncomplete from '../../assets/images/Profile/uncomplete.svg'

import Donut from '../../assets/images/About/donut-image.png'

const Profile = () => {

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

    const exit = () => {
        signOut(auth).then(() => {
            window.location.href = '/login'
        }).catch((error) => {
            alert(error)
        })
    }

    const changeAvatar = () => {
        alert(1)
        document.getElementById("profile_avatar").src = Donut
    }

    return(
        <>
            <Header />
            <section className={styles.profile}>
            <div className={styles.profile__wrapper}>
                <div className={styles.profile__info}>
                    <img src={profileicon} alt="didn't find" id="profile_avatar"  />
                    <div className={styles.profile__inputs}>
                        {
                            userName &&
                            <textarea value={userName} spellCheck="false" readOnly></textarea>
                        }
                        {
                            post &&
                            <textarea value={post} spellCheck="false" readOnly></textarea>
                        }
                        {
                            !userName &&
                            <textarea className={styles.notextarea} readOnly value='you are logged out!'></textarea>
                        }
                        {
                            !userName &&
                            <Button id='button' title='Signup' tapEvent={() => {
                                window.location.href = '/signup'
                            }} />
                        }
                        {
                            userName &&
                            <Button id='button' tapEvent={exit} title='Log out' />
                        }

                    </div>
                </div>

                <div className={styles.profile__progress}>
                    {/* <PictureWithText text='Check your progress' /> */}
                    <div className={styles.profile__status}>
                        {/* <span className={styles.profile__status__title}>Status</span>

                        <div className={styles.profile__lessons}>
                            <div className={styles.profile__lessons__result}>
                                <div className={styles.profile__lessons__number}>
                                    <span className={styles.lessons__text}>Lesson 1</span>
                                    <img src={uncomplete} alt="didn't find" />
                                </div>
                                <div className={styles.profile__lessons__line}>
                                    <div className={styles.profile__lessons__greenline}>

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

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className={styles.profile__status__contact}>
                            <span className={styles.profile__status__title}>Do you have any error?</span>
                            <a href='/contact'><Button title='Contact Us'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Profile