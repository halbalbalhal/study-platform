import styles from "./ContactsInfo.module.css"

import phone from '../../assets/images/Contacts/phone.svg'
import letter from '../../assets/images/Contacts/letter.svg'
import location from '../../assets/images/Contacts/location.svg'

import instagram from '../../assets/images/Contacts/instagram.svg'
import telegram from '../../assets/images/Contacts/telegram.svg'
import youtube from '../../assets/images/Contacts/youtube.svg'
import ini from '../../assets/images/Contacts/ini.svg'

const ContactsInfo = () => {
    return (
        <section className={styles.contact}>

            <div className={styles.contact__info}>
                <h1 className={styles.contact__title}>Contact us</h1>

                <div className={styles.contact__block}>
                    <img src={phone} />
                    <span className={styles.contact__point}>+375 (33) 123-45-66</span>
                </div>

                <div className={styles.contact__block}>
                    <img src={letter} />
                    <span className={styles.contact__point}>myit@gmail.com</span>
                </div>

                <div className={styles.contact__block}>
                    <img src={location} />
                    <span className={styles.contact__point}>Brest, st. Pionerskaya 52</span>
                </div>

                <div className={styles.contact__social}>
                    <img src={instagram} />
                    <img src={telegram} />
                    <img src={youtube} />
                    <img src={ini} />
                </div>

            </div>

            <div className={styles.contact__maps}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9969.177721640008!2d4.205374424624546!3d7.435261221031079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039c794bdefa103%3A0xaef13c3108f7fb18!2zMjIxMTA0LCDQkNCx0L7QsdCwLCDQntGB0YPQvSwg0J3QuNCz0LXRgNC40Y8!5e0!3m2!1sru!2sby!4v1682262986632!5m2!1sru!2sby"
                    width="600" height="400" loading="quick" 
                    className={styles.contact__maps__frame}></iframe>
            </div>

        </section>
    )
}

export default ContactsInfo


