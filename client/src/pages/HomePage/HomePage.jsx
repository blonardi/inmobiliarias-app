import './HomePage.css'
// import { dataAssets } from '../../assets/dataAssets'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { Form } from '../../components/Form/Form'
import { getAllHouses } from '../../services/houses/getAllHouses'
import { postHouse } from '../../services/houses/postHouse'

const baseUrl = 'http://localhost:3001/api/houses'
export default function HomePage () {
  const backgroundImageStyles = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const [houses, setHouses] = useState()

  useEffect(() => {
    // si es uan funcion con algun tipo de fetch o peticion se resuelve asi

    const fetchData = async () => {
      try {
        const result = await getAllHouses(baseUrl)
        setHouses(result)
      } catch (error) {
        console.error('Error al obtener las casas:', error)
      }
    }

    fetchData()
  }, [])

  const addNewFormHouse = async (nuevaCasa) => {
    // de esta forma seria sin el async, manejo la promesa que mando desde el postHouse
    // postHouse(nuevaCasa)
    //   .then((nuevaCasaRes) => {
    //     setHouses([...houses, nuevaCasaRes])
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })

    // CHATGPT WORKS
    try {
      const resultHouse = await postHouse(nuevaCasa)
      console.log(resultHouse)
      setHouses([...houses, resultHouse])
    } catch (error) {
      console.error('Error al agregar una nueva casa:', error)
      throw error
    }
  }

  return (
    <>
      <main>
        <section className='heading-page' style={backgroundImageStyles}>
          <div className='container heading-container'>
            <div className='heading-textContainer'>
              <h2 className='subtitle'>Kumpel</h2>
              <h1 className='title'>
                Encuentra la mejor casa para vivir con tu familia😊🏘️
              </h1>
            </div>
          </div>
        </section>
        <section className='filter-section'>
          <Filter />
        </section>
        <section className='container-homepage'>
          {houses?.length > 0 && houses.map(
            ({
              id,
              price,
              title,
              address,
              description,
              meters,
              type,
              location,
              realEstate,
              image
            }) => (
              <Card
                key={id}
                id={id}
                price={price}
                title={title}
                address={address}
                description={description}
                meters={meters}
                type={type}
                location={location}
                realEstate={realEstate}
                image={image}
              />
            )
          )}
        </section>
      </main>
      <footer>
        <Form addNewFormHouse={addNewFormHouse} houses={houses} />
      </footer>
    </>
  )
}
