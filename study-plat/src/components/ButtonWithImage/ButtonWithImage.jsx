import styles from './ButtonWithImage.module.css'

function ButtonWithImage(props) {
    return(
        <button className={styles.btn}><img src={props.img} alt='' className={styles.btn__image}/>{props.title}</button>
    )
}

export default ButtonWithImage