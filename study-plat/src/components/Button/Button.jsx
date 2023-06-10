import styles from './Button.module.css'

const Button = (props) => {
    return(
        <button className={styles.btn} disabled={props.isDisabled} onClick={props.tapEvent}>{props.title}</button>
    )
}

export default Button