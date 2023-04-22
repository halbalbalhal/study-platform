import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routesConfig from '../../routes/routesConfig'
import { setTheme } from '../../utils/themeUtil'
import styles from './App.module.css'

const App = () => {
    setTheme()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact
                            element={route.element}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App