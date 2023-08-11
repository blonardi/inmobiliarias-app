import './HomePage.css'
import Card from '../../components/Card/Card'
export default function HomePage() {

   const backgroundImageStyles = {
      backgroundImage: `url("https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
   }
  return (
   <main>
      <section className='heading-page' style={backgroundImageStyles}>
         <div className='container heading-container'>
            <div className='heading-textContainer'>
               <h2 className='subtitle'>Bonpland</h2>
               <h1 className='title'>Find a perfect home to live with your family</h1>
            </div>
         </div>
      </section>
      <section className='contaienr'>
         < Card />
      </section>
   </main>
  )
}