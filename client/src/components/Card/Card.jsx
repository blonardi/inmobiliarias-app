import './card.css'
import gpsLogo from '../../assets/gps.svg'
import { ItemCard } from '../ItemCard/ItemCard.jsx'
import { Link } from 'react-router-dom'

export const Card = ({
  id,
  price,
  title,
  address,
	description,
  meters,
  type,
	location,
  realEstate,
  image,
}) => {
  return (
    <Link to={`/details/${id}`} className='card-link'>
      <article className='house-card'>
        <div className='house-image'>
          <img className='house-image-src' src={image} alt='' />
        </div>
        <section className='house-info'>
          <div className='house-price'>
            <p>USD {price}</p>
          </div>
          <header className='house-name'>
            <h2>{title}</h2>
          </header>
          <div className='house-address'>
            <img src={gpsLogo} alt='' />
            <div className='house-address-direction'>
              <p>{address}</p>
            </div>
          </div>
        </section>
        <footer className='house-measures'>
          <ItemCard meters={meters} type={type} inmobiliaria={realEstate} />
        </footer>
      </article>
    </Link>
  )
}
