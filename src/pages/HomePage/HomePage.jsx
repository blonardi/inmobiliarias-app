import './HomePage.css'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'

import { dataAssets } from '../../assets/dataAssets'

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
        {dataAssets.map(
          ({
            id,
            image,
            price,
            title,
            address,
            meters,
            type,
            inmobiliaria
          }) => (
            <Card
              key={id}
              id={id}
              image={image}
              price={price}
              title={title}
              address={address}
              meters={meters}
              type={type}
              inmobiliaria={inmobiliaria}
            />
          )
        )}
      </section>
    </main>
  )
}
