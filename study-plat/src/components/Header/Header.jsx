import Menu from './Hamburger Menu/Menu'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import UserPanel from './UserPanel/UserPanel'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                <Nav />
                <UserPanel /> 
                <Menu />
            </div>
        </header>
    )
}

export default Header

