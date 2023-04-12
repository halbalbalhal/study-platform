import styles from './PictureWithText.module.css'
import cookie from '../../assets/images/SignUp/cookie.svg'

const PictureWithText = (props) => {
    return(
        <div className={styles.container}>
            <img src={cookie} alt='page did not find ' />
            <span className={styles.container__suggestion}>{props.text}</span>
        </div>
    )
}

export default PictureWithText