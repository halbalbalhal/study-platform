import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routesConfig from '../../routes/routesConfig'
import { setTheme } from '../../utils/themeUtil'

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