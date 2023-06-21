import styles from './Arrow.module.css'

const Arrow = (props) => {
    const click = () => {
        document.getElementById(props.id).classList.toggle(styles.active)
        props.onClick()
    }
    return(
        <div key={props.id} id={props.id} className={styles.arrow} onClick={click}></div>
    )
}

export default Arrow