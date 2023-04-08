import styles from './Button.module.css'

function Button(props) {
    return(
        <button className={styles.btn}>{props.title}</button>
    )
}

export default Button