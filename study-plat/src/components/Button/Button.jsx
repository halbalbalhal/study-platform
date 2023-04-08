import styles from './Button.module.css'

const Button = (props) => {
    return(
        <button className={styles.btn}>{props.title}</button>
    )
}

export default Button