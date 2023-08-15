import { useParams } from 'react-router-dom'
import { dataAssets } from '../../assets/dataAssets'


export const Details = () => {
   const {id} = useParams()
   const house = dataAssets[id]
   console.log(house)
  //  const { title } = thisHouse[0]
   
  return (
    <main className='container'>
      <div className="house-details">
        <img src={house.image} alt={`House`} />
        <h2>{house.title}</h2>
        <p>Price: ${house.price}</p>
        <p>Address: {house.address}</p>
      </div>
    </main>
  )
}
