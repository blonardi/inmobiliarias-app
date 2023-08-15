import { useParams } from 'react-router-dom'

const dataAssets = [
   {
     id: "1",
     price: 120000,
     title: "Hermosa Casa",
     address: "Calle Principal 123"
   },
   {
      id: "2",
     price: 250000,
     title: "Casa Moderna",
     address: "Avenida Central 456"
   },
   {
      id: "3",
     price: 75000,
     title: "Casa Clásica",
     address: "Callejón Secreto 789"
   },
   {
      id: "4",
     price: 320000,
     title: "Casa Elegante",
     address: "Plaza del Sol 101"
   },
   {
      id: "5",
     price: 95000,
     title: "Casa Acogedora",
     address: "Boulevard Hermoso 555"
   },
   {
      id: "6",
     price: 180000,
     title: "Casa Familiar",
     address: "Camino Tranquilo 777",
     meters: "50m"
   }
 ];

export const Details = () => {
   const {id} = useParams()
   const house = dataAssets[id]
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
