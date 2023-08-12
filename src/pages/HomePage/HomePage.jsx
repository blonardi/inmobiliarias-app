import Card from '../../components/Card/Card'
export default function HomePage() {
   const backgroundImageStyles = {
      backgroundImage: `url("https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg")`,
      backgroundSize: 'cover',
   }
  return (
   <main className='container homePage' style={backgroundImageStyles}>

   < Card />

   </main>
  )
}