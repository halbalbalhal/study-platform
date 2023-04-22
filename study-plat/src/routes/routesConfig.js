import Onboard from '../containers/Onboard/Onboard'
import Login from '../containers/Login/Page/Page'
import Signup from '../containers/Signup/Page/Page'
import Contact from '../containers/Contacts/Contact'

const routesConfig = [
    {
        path: '/onboard',
        exact: true,
        element: <Onboard />
    }, 
    {
        path: '/login',
        exact: true,
        element: <Login />
    },
    {
        path: '/signup',
        exact: true,
        element: <Signup />
    },
    {
        path: '/contact',
        exact: true,
        element: <Contact />
    }
]

export default routesConfig