import styles from './UserPanel.module.css'

const UserPanel = () => {
    return(
        <div className={styles.container}>
            <div className={styles.icon}></div>
            <span className={styles.text}>Username</span>
            <div className={styles.exit}></div>
        </div>
    )
}

export default UserPanel