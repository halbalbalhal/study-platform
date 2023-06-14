import styles from './UserPanel.module.css'
import { getUser, auth } from "../../../firebase/userService";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { signOut } from "firebase/auth"
const UserPanel = () => {
    const [userName, setUserName] = useState()
    const [render, setRender] = useState(0)
    const [userUid, setUserUid] = useState()

    if(!render){
        onAuthStateChanged(auth, (user) => {
            setUserUid(user.uid)
            setRender(1)
        })
    }

    if(userUid && !userName){
        getUser(userUid, (user) => {
            setUserName(user.name)
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
                userUid && userName &&
                <span className={styles.text}>{userName}</span>
            }
            {
                (!userUid || !userName) &&
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