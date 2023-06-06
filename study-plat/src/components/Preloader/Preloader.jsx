import styles from './Preloader.module.css'

const Preloader = () => {
    return(
        <div id='preloader' className={styles.preloader}>
            <div className={styles.preloader__firstCircle}></div>
            <div className={styles.preloader__secondCircle}></div>
        </div>
    )
}

export default Preloader