import './card.css'
import gpsLogo from "../../assets/gps.svg"
import { ItemCard } from '../ItemCard/ItemCard'

export const Card = ({image, price, title, address}) => {
  return ( 
    <article className='house-card'>
      <div className="house-image">
        <img className="house-image-src" src={image} alt="" />
      </div>
      <section className="house-info">
        <div className="house-price">
          <p>${price}</p>
        </div>
        <header className="house-name">
          <h2>{title}</h2>
        </header>
        <div className="house-address">
          <img src={gpsLogo} alt="" />
          <div className="house-address-direction">
            <p>{address}</p>
          </div>
        </div>
      </section>
      <footer className="house-measures"> 
        <ItemCard 
          meters={"60m2"}
          type={"Lote"}
          inmobiliaria={"Inm. Perera"}
        />
      </footer>    
    </article>
 )
}