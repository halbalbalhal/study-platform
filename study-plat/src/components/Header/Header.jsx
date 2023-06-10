import Menu from './Hamburger Menu/Menu'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import UserPanel from './UserPanel/UserPanel'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.wrapper}>
                <Logo />
                <Nav />
                <div className={styles.header__group}>
                    <UserPanel />
                    {window.innerWidth >= 1051 &&
                        <ThemeToggle />
                    }
                </div>
                <div className={styles.burger__container}>
                    {window.innerWidth <=    1050 &&
                        <ThemeToggle />
                    }
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Header

