import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import UserPanel from './UserPanel/UserPanel'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
            <UserPanel />
        </header>
    )
}

export default Header

