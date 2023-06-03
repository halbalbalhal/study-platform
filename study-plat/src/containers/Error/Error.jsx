import styles from './Error.module.css'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'

const Error = (props) => {
    return(
        <div className={styles.error}>
            <Header />
            <div className={styles.error__main}>
                <span className={styles.error__value}>{props.value}</span>
                <span className={styles.error__text}>{props.text}</span>
                <p className={styles.error__description}>{props.description}</p>
                <div className={styles.error__border}></div>
                <div className={styles.error__btn} onClick={() => {
                    window.location.href = '/homescreen'
                }}>
                    <Button title='Go to home'/>
                </div>
            </div>
        </div>
    )
}

export default Error