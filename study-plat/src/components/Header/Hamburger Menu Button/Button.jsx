import styles from './Button.module.css'
import { useEffect } from 'react'

const Button = (props) => {
    const activate = () => {
        const hamburger = document.getElementById('hamburger')

        if (props.isActive === true) {
            hamburger.classList.add(styles.active)
        } else {
            hamburger.classList.remove(styles.active)
        }
    }

    useEffect(activate)

    return (
        <div className={styles.hamburger} id='hamburger'>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
    )
}


export default Button