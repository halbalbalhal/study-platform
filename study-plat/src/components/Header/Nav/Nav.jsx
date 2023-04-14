import styles from './Nav.module.css'
import Link from '../Nav Link/Link'
import {useEffect} from 'react'

const Nav = () => {
    useEffect(highlight)
    return (
        <nav className={styles.nav} id='header__nav'>
            <Link value = {'Home'} />
            <Link value = {'Course'} />
            <Link value = {'Profile'} />
            <Link value = {'About'} />
        </nav>
    )
}

function getSelected() {
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

function highlight() {
    const selected = getSelected()
    selected.classList.add(styles.highlight)
}


export default Nav