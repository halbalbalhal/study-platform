import FirstPage from '../containers/FirstPage'
import SecondPage from '../containers/SecondPage'

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
    }
]

export default routesConfig