import styles from './Input.module.css'

function Input(props) {
    return(
        <div className={styles.column}>
            <input type={props.type} className={styles.column__input} required />
            <label for='' className={styles.column__labelForInput}>{props.title}</label>
        </div>
    )
}

export default Input