import styles from './Homescreen.module.css'

import Header from '../../components/Header'

function Homescreen() {
    return (
        <div className= {styles.container}>
            <Header />
        </div>
    )
}

export default Homescreen