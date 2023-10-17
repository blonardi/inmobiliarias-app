import './Details.css'

import { useParams } from 'react-router-dom'
import { dataAssets } from '../../assets/dataAssets'


export const Details = () => {
   const {id} = useParams()
   console.log(id)
   const house = dataAssets[id-1]
   console.log(house)
  //  const { title } = thisHouse[0]
   
  return (

    <main className='container'>
      <div className="house-details">
        <div className="details-img">
          <img src={house.image} alt={`House`} />
        </div>
        <div className="details-data">
          <div className="data-title">
            <h2>{house.title}</h2>
          </div>
          <div className="data-price">
            <p>Price: ${house.price}</p>
          </div>
          <div className="data-address">
            <p>Address: {house.address}</p>
          </div>
          <div className="data-description">
            <p>{house.description}</p>
          </div>
        </div>
      </div>  
    </main>
  )
}
