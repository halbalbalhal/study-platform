import styles from './About.module.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import PictureWithText from '../../components/Signup&Login/PictureWithText/PictureWithText'


const About = () => {
    return (
        <>
            <Header />
            <section className={styles.about}>
                <div className={styles.about__wrapper}>
                    <PictureWithText className={styles.cookie} text='Learn more about us' />
                    <span className={styles.title}>About Our Project</span>
                    <p className={styles.text}>We are a little group of people, that merged with common target to give people a lot of different new knowledge </p>
                    <div className={styles.button}>
                        <Button title='Go study' tapEvent={() => {
                            window.location.href = '/course'
                        }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About