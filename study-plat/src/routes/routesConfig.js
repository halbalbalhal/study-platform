import Login from '../containers/Login/Page/Page'
import Signup from '../containers/Signup/Page/Page'
import Error from '../containers/Error/Error'

const routesConfig = [
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
        element: <Error />
    }
]

export default routesConfig