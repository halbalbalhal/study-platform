import styles from './Contacts.module.css'
import Header from "../../components/Header"
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm'

import phone from '../../assets/icons/Contacts/phone.svg'
import letter from '../../assets/icons/Contacts/letter.svg'
import location from '../../assets/icons/Contacts/location.svg'

import instagram from '../../assets/icons/Contacts/instagram.svg'
import telegram from '../../assets/icons/Contacts/telegram.svg'
import youtube from '../../assets/icons/Contacts/youtube.svg'
import ini from '../../assets/icons/Contacts/ini.svg'

const Contact = () => {
    return (
        <>
        <Header />
        <section className={styles.group}>
            <div className={styles.contact}>

                <div className={styles.contact__info}>
                    <span className={styles.contact__title}>Contact us</span>

                    <div className={styles.contact__block}>
                        <img src={phone} alt="page didn't find" />
                        <span className={styles.contact__point}>+375 (33) 123-45-66</span>
                    </div>

                    <div className={styles.contact__block}>
                        <img src={letter} alt="page didn't find" />
                        <span className={styles.contact__point}>aleksandrbirula3@gmail.com</span>
                    </div>

                    <div className={styles.contact__block}>
                        <img src={location} alt="page didn't find" />
                        <span className={styles.contact__point}>Brest, st. Sovyetskaya 52</span>
                    </div>

                    <div className={styles.contact__social}>
                        <a href='https://www.youtube.com/@itschoolbrest/featured' target='_blank' className={styles.social__icon}><img src={instagram} alt="page didn't find" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.social__icon} target='_blank'><img src={youtube} alt="page didn't find" /></a>
                        <a href="https://t.me/tinkivinki1234" className={styles.social__icon} target='_blank'><img src={telegram} alt="page didn't find" /></a>
                        <a href='https://www.linkedin.com/company/apple/' className={styles.social__icon} target='_blank'><img src={ini} alt="page didn't find" /></a>
                    </div>

                </div>

                <div className={styles.contact__maps}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294967.6723745493!2d24.702386531340903!3d54.71956396268943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940357141f55%3A0x7631f93d93b12bed!2sMicrosoft!5e0!3m2!1sru!2sby!4v1688028949729!5m2!1sru!2sby"
                        loading="lazy"
                        title="googleFrame"
                        className={styles.contact__maps__frame}></iframe>
                </div>

            </div>
            {/* <FeedbackForm /> */}
        </section>
        </>
    )
}

export default Contact