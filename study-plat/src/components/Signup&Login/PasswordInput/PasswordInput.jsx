import styles from './PasswordInput.module.css'
import {useState} from "react";
import ShowEye from "../ShowEye/ShowEye";
import HideEye from "../HideEye/HideEye";


const PasswordInput = (props) => {
    const [type, setType] = useState(false)
    const changeType = () => {
        type ? setType(false) : setType(true)
    }

    return(
        <div className={styles.column}>
            <input type={type ? 'text' : 'password'} className={styles.column__input} required />
            <label for='' className={styles.column__labelForInput}>{props.title}</label>
            {
                type ? <div className={styles.column__icon} onClick={changeType}><ShowEye /></div> : <div className={styles.column__icon} onClick={changeType}><HideEye /></div>
            }
        </div>
    )
}

export default PasswordInput