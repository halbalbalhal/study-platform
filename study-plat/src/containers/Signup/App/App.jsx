import Wrapper from '../Wrapper/Wrapper'
import PictureWithText from '../../../components/PictureWithText/PictureWithText'
import Link from '../../../components/Link/Link'
import styles from './App.module.css'

function App () {
    return(
        <div className={styles.container}>
            <PictureWithText text='Create your personal account' />
            <Wrapper />
            <Link link='/login' text='Do you have an account? ' textLink='Log in' />
        </div>
    )
}

export default App