import Onboard from "../containers/Onboard/Onboard"
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
    }
]

export default routesConfig