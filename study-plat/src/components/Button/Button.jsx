import styles from './Button.module.css'

function Button(props) {
    return(
        <button className={styles.loginBtn}>{props.title}</button>
    )
}

export default Button