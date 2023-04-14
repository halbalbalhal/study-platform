import styles from './Link.module.css'

const Link = (props) => {
    return (
        <a href='#' className={styles.link}>{props.value}</a>
    )
}

export default Link