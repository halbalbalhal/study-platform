import Homescreen from '../containers/Homescreen/Homescreen'
import Onboard from "../containers/Onboard/onboard"
import Login from '../containers/Login/Page/Page'
import Signup from '../containers/Signup/Page/Page'

const routesConfig = [
    // Onboard Page
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
        path: '/homescreen',
        exact: true,
        element: <Homescreen />
    }
]

export default routesConfig