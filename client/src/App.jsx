import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header/Header'
import HomePage from "./pages/HomePage/HomePage"
import { Details } from './pages/Details/Details'
import { Header } from './components/Header/Header'

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path='/' element={ < HomePage />} />
            <Route path='/details/:id' element={ < Details />} />
         </Routes>
      </>
   )
}

export default App