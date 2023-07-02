import styles from './Input.module.css'
import {useState} from "react"
import ShowEye from "../Signup&Login/ShowEye/ShowEye"
import HideEye from "../Signup&Login/HideEye/HideEye"


const Input = ({ name, register, title, type, isValid, isRegister, isLogin, onChange }) => {
    const [typeOfText, setTypeOfText] = useState(false)

    const changeType = () => {
        typeOfText ? setTypeOfText(false) : setTypeOfText(true)
    }

    const changeInput = (event) => {
        if(isLogin === 'true') {
            onChange(event.target.value, name)
        }
    }

    const getData = (inputName) => {
        switch (inputName) {
            case 'name':
                return {
                    errorMessage: 'The name must contain only letters and consist of 2-6 letters',
                    regex: /(?=^.{2,6}$)[a-zA-Z-а-яА-Я]/,
                }
            case 'email':
                return {
                    errorMessage: 'Mail must contain "@" and "."',
                    regex: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                }
            case 'password':
                return {
                    errorMessage: 'Password must contain 1 uppercase letter, 1 small letter, number and be at least 6 characters',
                    regex: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{6,})/
                }
            default: return { errorMessage: '' }
        }
    }

    const data = getData(name)

    let realType
    if(name === 'password' || name === 'password_repeat') {
        typeOfText ? realType = 'text' : realType = 'password'
    } else {
        realType = type
    }

    // let password
    // isRegister === 'true' && (password = watch(['password', 'password_repeat']))

    return(
        <div className={styles.column}>
            <input
                type={realType}
                {
                    ...isRegister === 'true' && {...register(name, { required: true, pattern: data.regex})}
                }
                className={`${styles.column__input} ${!isValid && styles.error}`}
                id={`input_${name}`}
                //${(isRegister && (password[0] !== password[1] && name === 'password_repeat')) && styles.error}
                onChange={changeInput}
                required
            />
            {
                !isValid && <span className={styles.column__error}>{data.errorMessage}</span>
            }
            <label className={styles.column__labelForInput}>{title}</label>
            {
                (name === 'password' || name === 'password_repeat') && (typeOfText ? <div className={styles.column__icon} onClick={changeType}><ShowEye /></div> : <div className={styles.column__icon} onClick={changeType}><HideEye /></div>)
            }
            {/*{*/}
            {/*    (name === 'password_repeat') && (password[0] !== password[1] && <span className={styles.column__error}>Passwords don't match</span>)*/}
            {/*}*/}
        </div>
    )
}

export default Input