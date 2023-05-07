import styles from './ContactsInfo.module.css'

import phone from '../../assets/icons/Contacts/phone.svg'
import letter from '../../assets/icons/Contacts/letter.svg'
import location from '../../assets/icons/Contacts/location.svg'

import instagram from '../../assets/icons/Contacts/instagram.svg'
import telegram from '../../assets/icons/Contacts/telegram.svg'
import youtube from '../../assets/icons/Contacts/youtube.svg'
import ini from '../../assets/icons/Contacts/ini.svg'

const ContactsInfo = () => {
    return (
        <section className={styles.contact}>

            <div className={styles.contact__info}>
                <span className={styles.contact__title}>Contact us</span>

                <div className={styles.contact__block}>
                    <img src={phone} alt="page didn't find" />
                    <span className={styles.contact__point}>+375 (33) 123-45-66</span>
                </div>

                <div className={styles.contact__block}>
                    <img src={letter} alt="page didn't find" />
                    <span className={styles.contact__point}>myit@gmail.com</span>
                </div>

                <div className={styles.contact__block}>
                    <img src={location} alt="page didn't find" />
                    <span className={styles.contact__point}>Brest, st. Pionerskaya 52</span>
                </div>

                <div className={styles.contact__social}>
                    <a href='https://www.youtube.com/@itschoolbrest/featured' target='_blank' className={styles.social__icon}><img src={instagram} alt="page didn't find" /></a>
                    <a href="https://t.me/myitby" className={styles.social__icon} target='_blank'><img src={telegram} alt="page didn't find" /></a>
                    <a href="https://www.youtube.com/@itschoolbrest/featured" className={styles.social__icon} target='_blank'><img src={youtube} alt="page didn't find" /></a>
                    <a href='https://www.linkedin.com/school/myit-school/' className={styles.social__icon} target='_blank'><img src={ini} alt="page didn't find" /></a>
                </div>

            </div>

            <div className={styles.contact__maps}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.3911672534464!2d23.729312917184803!3d52.09595325600302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210dd8bc191b53%3A0x1848e4b3e03ee20b!2zTXlJVCAtIE9ubGluZSBJVC3RiNC60L7Qu9CwICjQkdGA0LXRgdGCKQ!5e0!3m2!1sru!2sby!4v1683377375940!5m2!1sru!2sby"
                    loading="quick" 
                    title="googleFrame"
                    className={styles.contact__maps__frame}></iframe>
            </div>

        </section>
    )
}

export default ContactsInfo


