import styles from './SecondButton.module.css'

function SecondButton(props) {
    return(
        <button className={styles.loginGoogleBtn}><img src={props.img} alt='' className={styles.loginGoogleImg}/>{props.title}</button>
    )
}

export default SecondButton