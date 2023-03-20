import Wrapper from './Wraper'
import PictureWithText from '../Components/PictureWithText/PictureWithText'
import Link from '../Components/Link/Link'
import './App.css'

function App () {
    return(
        <div className='login'>
            <PictureWithText text='Login to your personal account' />
            <Wrapper />
            <Link link='https://ru.reactjs.org/' text='Don’t have an account?' textLink=' Sign up' />
        </div>
    )
}

export default App