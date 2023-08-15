import './HomePage.css'
import { Card } from '../../components/Card/Card'
import image from "../../../idea5-path/materiales/foto2.jpeg"

const dataAssets = [
   {
     id: "1",
     image: image,
     price: 120000,
     title: "Hermosa Casa",
     address: "Calle Principal 123"
   },
   {
      id: "2",
     image: image,
     price: 250000,
     title: "Casa Moderna",
     address: "Avenida Central 456"
   },
   {
      id: "3",
     image: image,
     price: 75000,
     title: "Casa Clásica",
     address: "Callejón Secreto 789"
   },
   {
      id: "4",
     image: image,
     price: 320000,
     title: "Casa Elegante",
     address: "Plaza del Sol 101"
   },
   {
      id: "5",
     image: image,
     price: 95000,
     title: "Casa Acogedora",
     address: "Boulevard Hermoso 555"
   },
   {
      id: "6",
     image: image,
     price: 180000,
     title: "Casa Familiar",
     address: "Camino Tranquilo 777"
   }
 ];

export default function HomePage() {

   // const backgroundImageStyles = {
   //    backgroundImage: `url("https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg")`,
   //    backgroundSize: 'cover',
   //    backgroundPosition: 'center',
   //    backgroundRepeat: 'no-repeat'
   // }


  return (
   <main>
      {/* <section className='heading-page' style={backgroundImageStyles}>
         <div className='container heading-container'>
            <div className='heading-textContainer'>
               <h2 className='subtitle'>Bonpland</h2>
               <h1 className='title'>Find a perfect home to live with your family</h1>
            </div>
         </div>
      </section> */}

      <section className='container'>

         {dataAssets.map(({ id, image, price, title, address}) => (
            
               <Card
                  key={id}
                  image={image}
                  price={price}
                  title={title}
                  address={address}
               />
      
         ))}
      </section>
   </main>
  )
}