import styles from './PictureWithText.module.css'

const PictureWithText = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.image}></div>
            <span className={styles.container__suggestion}>{props.text}</span>
        </div>
    )
}

export default PictureWithText