import FirstPage from '../containers/FirstPage'
import SecondPage from '../containers/SecondPage'
import Homescreen from '../containers/Homescreen/Homescreen'

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
    {
        path: '/homescreen',
        exact: true,
        element: <Homescreen />
    }
]

export default routesConfig