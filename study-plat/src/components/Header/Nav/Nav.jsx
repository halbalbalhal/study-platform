import styles from './Nav.module.css'
import Link from '../Nav Link/Link'
import {useEffect} from 'react'

const Nav = () => {
    const getSelected = () => {
        const path = document.location.pathname
        let index
        
        switch(path) {
            case '/homescreen':
                index = 0
                break
            case '/course':
                index = 1
                break
            case '/profile':
                index = 2
                break
            case '/about':
                index = 3
                break
            default: 
                index = 0    
        }
    
        const selected = document.getElementById('header__nav').children[index]
        return selected
    }

    const highlight = () => {
        const selected = getSelected()
        selected.classList.add(styles.highlight)
    }

    useEffect(highlight)

    return (
        <nav className={styles.nav} id='header__nav'>
            <Link value={'Home'} path={'/homescreen'} />
            <Link value={'Course'} path={'/course'} />
            <Link value={'Profile'} path={'/profile'} />
            <Link value={'About'} path={'/about'} />
        </nav>
    )
}

export default Nav