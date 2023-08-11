import './header.css'
import logoImg from '../../../idea5-path/materiales/bonpland.jfif'
const Header = () => {
   return (
      <header className='header-container'>
         <nav>
            <div className="logo-container">
               <img className='logo-image' src={logoImg} alt="logo de la empresa" />
            </div>
         </nav>
      </header>
   )
}

export default Header