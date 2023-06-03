import styles from './UserPanel.module.css'

const UserPanel = () => {
    const toProfile = () => {
        window.location.href = '/profile'
    }

    const exit = () => {
        window.location.href = '/exit'
    }

    return(
        <div className={styles.container}>
            <div className={styles.icon} onClick={toProfile}></div>
            <span className={styles.text}>Username</span>
            <div className={styles.exit} onClick={exit}></div>
        </div>
    )
}

export default UserPanel