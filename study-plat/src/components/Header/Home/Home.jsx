import styles from './Home.module.css'

import Button from '../../Button'
import Berry from '../../Berry/Berry'

const Home = () => {
    return (
        <section className={styles.homescreen}>
            <div className={styles.homescreen__wrapper}>
                <div className={styles.homescreen__info}>
                    <span className={styles.homescreen__title}>Explore new <span className={styles.homescreen__blue}>skills</span> <span className={styles.homescreen__purple}>with</span> <span className={styles.homescreen__green}>School</span></span>
                    <p className={styles.homescreen__text}>choose a new <span className={styles.homescreen__red}>profession</span>, that can change the future of the whole <span className={styles.homescreen__yellow}>world</span></p>
                    <Button className={styles.homescreen__button} title='Go study' />
                </div>
                <Berry />
            </div>
        </section>
    )
}

export default Home