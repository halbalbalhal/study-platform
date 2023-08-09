import styles from './Links.module.css'
import { useEffect } from 'react'

const Links = (props) => {

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
        <>
        <div className={styles.container} id="Hamburger-menu">
            <a href="/homescreen" className={styles.link}>Home</a>
            <a href="/course" className={styles.link}>Course</a>
            <a href="/profile" className={styles.link}>Profile</a>
            <a href="/about" className={styles.link}>About</a>
            <a href='/contact' className={styles.link}>Contact Us</a>
        </div>
        </>
    )
}

export default Links