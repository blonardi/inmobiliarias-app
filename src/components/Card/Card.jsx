import './card.css'
import image from "../../../idea5-path/materiales/property-4.jpg"
import gpsLogo from "../../assets/gps.svg"
import ItemCard from '../ItemCard/ItemCard'

const Card = () => {
  return ( 
    <article className='house-card'>
      <div className="house-image">
        <img className="house-image-src" src={image} alt="" />
      </div>
      <section className="house-info">
        <div className="house-price">
          <p>$24,600</p>
        </div>
        <header className="house-name">
          <h2>Golden Urban House For Sell</h2>
        </header>
        <div className="house-address">
          <img src={gpsLogo} alt="" />
          <div className="">
            <p>123 Street, New York, USA</p>
          </div>
        </div>
      </section>
      <footer className="house-measures"> 
        <ItemCard />
      </footer>    
    </article>
 )
}

export default Card