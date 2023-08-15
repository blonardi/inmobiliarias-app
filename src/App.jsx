import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from "./pages/HomePage/HomePage"
import Details from './pages/Details/Details'

function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={ < HomePage />} />
            <Route path='/details/:houseId' element={ < Details />} />
         </Routes>
      </>
   )
}

export default App