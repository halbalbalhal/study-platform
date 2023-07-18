import styles from './Dd.module.css'

const Dd = (props) => {
    return (
        <div className={styles.dd__container}>
            <span className={styles.dd__title}>{props.title}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default Dd