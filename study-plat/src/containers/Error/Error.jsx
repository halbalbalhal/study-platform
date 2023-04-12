import styles from './Error.module.css'
import Button from '../../components/Button/Button'

const Error = (props) => {
    return(
        <div className={styles.error}>
            <span className={styles.error__value}>{props.value}</span>
            <span className={styles.error__text}>{props.text}</span>
            <p className={styles.error__description}>{props.description}</p>
            <div className={styles.error__border}></div>
            <div className={styles.error__btn}>
                <Button title='Go to home'/>
            </div>
        </div>
    )
}

export default Error