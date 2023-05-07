import styles from './Logo.module.css'
 
const Logo = () => {
    return (
        <div className= {styles.container}>
            <div className={styles.image}></div>
            <span className={styles.text}>Logo</span>
        </div>
    )
}

export default Logo