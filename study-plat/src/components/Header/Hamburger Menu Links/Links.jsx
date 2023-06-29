import styles from './Links.module.css'
import { useEffect } from 'react'
import { signOut } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../firebase/userService"
import { useState } from 'react'


const Links = (props) => {

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

    const activate = () => {
        const menu = document.getElementById('Hamburger-menu')

        if (!props.isActive) {
            menu.classList.remove(styles.active)
            if(props.countRender > 0) {
                menu.classList.add(styles.disable)
                setTimeout(() => {
                    menu.classList.remove(styles.disable)
                }, 1000)
            }
            return
        }
        menu.classList.remove(styles.disable)
        menu.classList.add(styles.active)
    }

    

    useEffect(activate)

    return (
        <div className={styles.container} id="Hamburger-menu">
            <a href="/homescreen" className={styles.link}>Home</a>
            <a href="/course" className={styles.link}>Course</a>
            <a href="/profile" className={styles.link}>Profile</a>
            <a href="/about" className={styles.link}>About</a>
            <a href='/contact' className={styles.link}>Contact Us</a>
        </div>
    )
}

export default Links