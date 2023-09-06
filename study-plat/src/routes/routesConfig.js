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

// courses
import CoursePlayerReact from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerReact'
import CoursePlayerHTML from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerHTML'
import CoursePlayerPython from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerPython'
import CoursePlayerCSS from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerCSS'
import CoursePlayerJS from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerJS'
import CoursePlayerNode from '../containers/CoursePlayer/CoursePLayerList/CoursePlayerNode'


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
        path: '/**',
        exact: true,
        element: <Error value='404' text='Server error' description='Page not found' />
    },
    {
        path: '/*',
        exact: true,
        element: <Profile />
    },

    // all courses will be here
    {
        path: '/coursereact',
        exact: true,
        element: <CoursePlayerReact />
    },
    {
        path: '/coursehtml',
        exact: true,
        element: <CoursePlayerHTML />
    },
    {
        path: '/coursepython',
        exact: true,
        element: <CoursePlayerPython />
    },
    {
        path: '/coursecss',
        exact: true,
        element: <CoursePlayerCSS />
    },
    {
        path: '/coursejs',
        exact: true,
        element: <CoursePlayerJS />
    },
    {
        path: '/coursenode',
        exact: true,
        element: <CoursePlayerNode />
    }
]

export default routesConfig