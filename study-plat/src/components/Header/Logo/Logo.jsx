import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className= {styles.container} onClick={() => {
            window.location.href = '/course'
        }}>
            <div className={styles.image}></div>
            <span className={styles.text}>Learn</span>
        </div>
    )
}

export default Logo