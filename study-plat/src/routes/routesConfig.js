import Homescreen from '../containers/Homescreen/Homescreen'
import Onboard from '../containers/Onboard/Onboard'
import Login from '../containers/Login/Login'
import Signup from '../containers/Signup/Signup'
import Contact from '../containers/Contacts/Contact'
import Error from '../containers/Error/Error'
import Profile from '../containers/Profile/Profile'
import Main from '../containers/Main/Main'
import About from '../containers/About/About'
import Cources from '../containers/Cources/Cources'
import CoursePlayer from '../containers/CoursePlayer/CoursePlayer'


const routesConfig = [
    {
        path: '/',
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
        path: '/about',
        exact: true,
        element: <About />
    },
    {
        path: '/course',
        exact: true,
        element: <Cources />
    },
    {
        path: '/courseplayer',
        exact: true,
        element: <CoursePlayer />
    },
    {
        path: '/**',
        exact: true,
        element: <Error value='404' text='Server error' description='Page not found' />
    },
    {
        path: '/*',
        exact: true,
        element: <Profile />
    }
]

export default routesConfig