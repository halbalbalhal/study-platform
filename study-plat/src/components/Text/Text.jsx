import styles from './Text.module.css'

function Text(props) {
    return(
        <div className={styles.group}>
            <div className={styles.border}></div>
            <span className={styles.text}>{props.title}</span>
            <div className={styles.border}></div>
        </div>
    )
}

export default Text