import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Cadastro } from './components/Cadastro'

export const AppRoutes = () => {
    return (

        <BrowserRouter>

            <Routes>

                <Route path='/register' element={<Cadastro />} />
                <Route path='*' element={<Login />} />


            </Routes>

        </BrowserRouter>

    )
}