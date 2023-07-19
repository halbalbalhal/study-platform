import styles from './Dd.module.css'

import Cross from '../../assets/icons/commonlogos/cross.svg'

const Dd = (props) => {

    const DdClose = () => {
        document.getElementById("dropdown").style.display = 'none'
        console.log('Something went wrong if this message appears')
    }

    return (
        <div className={styles.dd__container} id='dropdown'>
            <div className={styles.dd__image} onClick={DdClose}>
                <img src={Cross} />
            </div>
            <span className={styles.dd__title}>{props.title}</span>
        </div>
    )
}

export default Dd


//It is the dropdown message that appears
//while you login or signup and make a mistake