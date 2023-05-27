import styles from './Input.module.css'
import {useState} from "react";
import ShowEye from "../Signup&Login/ShowEye/ShowEye";
import HideEye from "../Signup&Login/HideEye/HideEye";

const Input = ({ name, register, title, type, isValid }) => {
    const [typeOfText, setTypeOfText] = useState(false)
    const changeType = () => {
        typeOfText ? setTypeOfText(false) : setTypeOfText(true)
    }

    const getData = (inputName) => {
        switch (inputName) {
            case 'name':
                return {
                    errorMessage: 'Имя должно содержать только буквы и состоять из двух слов',
                    regex: /[a-zA-Z]+$/
                }
            case 'email':
                return {
                    errorMessage: 'Почта должна содержать "@" и "."',
                    regex: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                }
            case 'password':
                return {
                    errorMessage: 'Пароль должен содержать 1 заглавную букву, 1 маленькую, цифру и быть не короче 6 символов',
                    regex: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{6,})/
                }
            default: return { errorMessage: '' }
        }
    }
    let reallyType
    if(name === 'password') {
        typeOfText ? reallyType = 'text' : reallyType = 'password'
    } else {
        reallyType = type
    }

    const data = getData(name)

    return(
        <div className={styles.column}>
            <input
                type={reallyType}
                {...register(name, { required: true, pattern: data.regex })}
                className={`${styles.column__input} ${!isValid && styles.error}`}
                required
            />
            <label for='' className={styles.column__labelForInput}>{title}</label>
            {
                (name === 'password') ? (typeOfText ? <div className={styles.column__icon} onClick={changeType}><ShowEye /></div> : <div className={styles.column__icon} onClick={changeType}><HideEye /></div>) : console.log(type)
            }
        </div>
    )
}

export default Input