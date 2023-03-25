import styles from './Link.module.css'


function Link (props) {
    return(
        <span className={styles.textWithLink}>{props.text}<a className={styles.link} href={props.link}>{props.textLink}</a></span>
    )
}

export default Link