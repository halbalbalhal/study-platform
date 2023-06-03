import styles from './Menu.module.css'
import Button from '../Hamburger Menu Button/Button'
import Links from '../Hamburger Menu Links/Links'
import { useState } from 'react'

const Menu = () => {
    const [isActive, setIsActive] = useState(false)
    const [countRender, setCountRender] = useState(0)

    const toggleIsActive = () => {
        if (isActive === true) {
            setIsActive(false)
            return
        }

        setIsActive(true)
        setCountRender(1)
    }

    return (
        <div className={styles.menu}>
            <div onClick={toggleIsActive}>
                <Button isActive={isActive}/>
            </div>
            <Links isActive={isActive} countRender={countRender}/>
        </div>
    )
}

export default Menu