import FirstPage from '../containers/FirstPage'
import SecondPage from '../containers/SecondPage'
import Onboard from '../containers/onboardPage/onboard'

const routesConfig = [
    {
        path: '/firstpage',
        exact: true,
        element: <FirstPage />
    },
    {
        path: '/secondpage',
        exact: true,
        element: <SecondPage />
    },
    // Onboard Page
    {
        path: '/onboard',
        exact: true,
        element: <Onboard />
    }
]

export default routesConfig