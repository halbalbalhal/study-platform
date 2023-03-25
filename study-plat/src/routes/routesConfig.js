import Login from '../containers/Login/App/App'
import Signup from '../containers/Signup/App/App'

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
    }
]

export default routesConfig