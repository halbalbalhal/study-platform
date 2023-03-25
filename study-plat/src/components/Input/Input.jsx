import styles from './Input.module.css'

function Input(props) {
    return(
        <div className={styles.column}>
            <input type={props.type} className={styles.input} required />
            <label for='' className={styles.labelForInput}>{props.title}</label>
        </div>
    )
}

export default Input