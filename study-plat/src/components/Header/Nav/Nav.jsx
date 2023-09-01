import styles from './Nav.module.css'
import Link from '../Nav Link/Link'
import {useEffect} from 'react'

const Nav = () => {
    useEffect(highlight)

    return (
        <nav className={styles.nav} id='header__nav'>

            <Link value={'Profile'} path={'/profile'} />
            <Link value={'Courses'} path={'/course'} />
            <Link value={'About'} path={'/about'} />
            <Link value={'Contact'} path={'/contact'} />
        
        </nav>
    )
}

function getSelected() {
    const path = document.location.pathname
    let index
    
    switch(path) {
        case '/profile':
            index = 0
            break
        case '/course':
            index = 1
            break
        case '/about':
            index = 2
            break
        case '/contact':
            index = 3
            break
        default: 
            index = 0    
    }

    const selected = document.getElementById('header__nav').children[index]
    return selected
}

function highlight() {
    const selected = getSelected()
    selected.classList.add(styles.highlight)
}

export default Nav