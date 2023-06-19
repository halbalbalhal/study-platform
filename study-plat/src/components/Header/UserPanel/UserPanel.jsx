import styles from './UserPanel.module.css'
import { auth } from "../../../firebase/userService";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { signOut } from "firebase/auth"
const UserPanel = () => {
    const [userName, setUserName] = useState()
    const [render, setRender] = useState(0)

    if(!render){
        onAuthStateChanged(auth, (user) => {
            setUserName(user.displayName)
            setRender(1)
        })
    }

    const toProfile = () => {
        window.location.href = '/profile'
    }

    const exit = () => {
        signOut(auth).then(() => {
            window.location.href = '/login'
        }).catch((error) => {
            alert(error)
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.icon} onClick={toProfile}></div>
            {
                userName &&
                <span className={styles.text}>{userName}</span>
            }
            {
                !userName &&
                <div>
                    <a href='/login' className={styles.text}>Login</a>
                    <span className={styles.text}>/</span>
                    <a href='/signup' className={styles.text}>Signup</a>
                </div>
            }
            <div className={styles.exit} onClick={exit}></div>
        </div>
    )
}

export default UserPanel