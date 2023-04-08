import styles from './Error.module.css'
import Button from '../../components/Button/Button'

const Error = () => {
    return(
        <div className={styles.error}>
            <span className={styles.error__value}>500</span>
            <span className={styles.error__text}>Server error</span>
            <p className={styles.error__description}>There was an error on the server. Please wait, we will fix it soon.</p>
            <div className={styles.error__border}></div>
            <div className={styles.error__btn}>
                <Button title='Go to home'/>
            </div>
        </div>
    )
}

export default Error