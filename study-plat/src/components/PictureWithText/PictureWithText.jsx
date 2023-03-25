import styles from './PictureWithText.module.css'
import cookie from '../../assets/images/cookie.svg'

function PictureWithText(props) {
    return(
        <div className={styles.container}>
            <img src={cookie} alt='' />
            <span className={styles.suggestion}>{props.text}</span>
        </div>
    )
}

export default PictureWithText