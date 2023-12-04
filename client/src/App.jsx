import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import { Details } from './pages/Details/Details'
import { Header } from './components/Header/Header'
import { Form } from './components/Form/Form'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/nosotros' element={<Nosotros />} /> */}
        {/* <Route path='/contacto' element={<Contacto />} /> */}
        <Route path='/details/:id' element={<Details />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
