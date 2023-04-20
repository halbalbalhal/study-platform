import { darkTheme, lightTheme, selectedTheme, toggleTransition } from '../../utils/themeUtil'
import styles from './ThemeToggle.module.css'

const ThemeToggle = (props) => {
    const themeChange = (e) => {
        toggleTransition()
        if (e.target.checked){
            lightTheme()
        } else {
            darkTheme()
        }
        
    }

    return(
        <div className={styles.toggle_switch}>
            <label className={styles.toggle_switch__label}>
                <input onChange={themeChange} defaultChecked={selectedTheme !== 'dark'} type="checkbox" className={styles.label__checkbox} />
                <span className={styles.label__slider}></span>
            </label>
        </div>
    )
}

export default ThemeToggle