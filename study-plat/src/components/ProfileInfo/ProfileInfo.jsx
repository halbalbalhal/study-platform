import styles from './ProfileInfo.module.css'

import Button from '../Button/Button'
import PictureWithText from '../PictureWithText/PictureWithText'

import profileicon from '../../assets/images/Profile/profileicon.svg'
import complete from '../../assets/images/Profile/complete.svg'
import uncomplete from '../../assets/images/Profile/uncomplete.svg'

const ProfileInfo = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.profile__wrapper}>
                <div className={styles.profile__info}>
                    <img src={profileicon} alt="didn't find"  />
                    <div className={styles.profile__inputs}>
                        <textarea spellCheck="false">Кирилл</textarea>
                        <textarea spellCheck="false">Максимчик</textarea>
                        <textarea spellCheck="false">20</textarea>
                        <textarea spellCheck="false">post@gmail.com</textarea>
                        <Button title='Log Out' />
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
                                        {/* пустой блок как зеленая линия */}
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
                                        {/* пустой блок как зеленая линия */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile__status__contact}>
                            <span className={styles.profile__status__title}>Do you have any error?</span>
                            <a href="http://localhost:3000/contact"><Button title='Contact Us' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo