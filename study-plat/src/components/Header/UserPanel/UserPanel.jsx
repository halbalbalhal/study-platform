import styles from './UserPanel.module.css'
import exitIcon from '../../../assets/icons/exit-icon.svg'
import userIcon from '../../../assets/icons/user-icon.svg'

const UserPanel = () => {
    return(
        <div className={styles.container}>
            <img className= {styles.icon} src={userIcon} alt=''/>
            <span className={styles.text}>Username</span>
            <button className={styles.button}>
                <img src={exitIcon} alt='' />
            </button>
        </div>
    )
}

export default UserPanel