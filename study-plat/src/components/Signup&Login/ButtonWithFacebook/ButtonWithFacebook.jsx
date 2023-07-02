import styles from './ButtonFacebook.module.css'
import FacebookLogo from '../../../assets/icons/commonlogos/facebooklogo.svg'

const ButtonWithFacebook = (props) => {
    return(
        <button className={styles.btn} onClick={props.tapEvent}>
            <img src={FacebookLogo} />
            {props.title}
        </button>   
    )

}

export default ButtonWithFacebook