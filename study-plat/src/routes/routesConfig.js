import Onboard from "../containers/Onboard/Onboard"
import Login from '../containers/Login/Page/Page'
import Signup from '../containers/Signup/Page/Page'
import Error from '../containers/Error/Error'

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
        path: '/error',
        exact: true,
        element: <Error value='500' text='Server error' description='There was an error on the server. Please wait, we will fix it soon.' />
    }
]

export default routesConfig