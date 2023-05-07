import styles from './Links.module.css'
import { useEffect } from 'react'

const Links = (props) => {
    const activate = () => {
        const menu = document.getElementById('Hamburger-menu')

        if (!props.isActive) {
            menu.classList.remove(styles.active)
            return
        }
        menu.classList.add(styles.active)
    }

    useEffect(activate)

    return (
        <div className={styles.container} id="Hamburger-menu">
            <a href="/Homescreen" className={styles.link}>Home</a>
            <a href="/Course" className={styles.link}>Course</a>
            <a href="/Profile" className={styles.link}>Profile</a>
            <a href="/About" className={styles.link}>About</a>
        </div>
    )
}

export default Links