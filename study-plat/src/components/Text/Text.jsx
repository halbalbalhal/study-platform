import styles from './Text.module.css'

function Text(props) {
    return(
        <div className={styles.group}>
            <div className={styles.group__border}></div>
            <span className={styles.group__text}>{props.title}</span>
            <div className={styles.group__border}></div>
        </div>
    )
}

export default Text