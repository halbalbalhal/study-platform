import Homescreen from '../containers/Homescreen/Homescreen'
import Onboard from '../containers/Onboard/Onboard'
import Login from '../containers/Login/Login'
import Signup from '../containers/Signup/Signup'
import Contact from '../containers/Contacts/Contact'
import Error from '../containers/Error/Error'
import Main from '../containers/Main/Main'


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
        path: '/homescreen',
        exact: true,
        element: <Homescreen />
    },
    {
        path: '/contact',
        exact: true,
        element: <Contact />
    },
    {
        path: '/course',
        exact: true,
        element: <Main />
    },
    {
        path: '/error',
        exact: true,
        element: <Error value='500' text='Server error' description='There was an error on the server. Please wait, we will fix it soon.' />

    }
]

export default routesConfig