import Wrapper from '../Wrapper/Wrapper'
import PictureWithText from '../../../components/PictureWithText/PictureWithText'
import Link from '../../../components/Link/Link'
import styles from './Page.module.css'

function Page () {
    return(
        <div className={styles.container}>
            <PictureWithText text='Login to your personal account' />
            <Wrapper />
            <Link link='/signup' text='Don’t have an account? ' textLink='Sign up' />
        </div>
    )
}

export default Page