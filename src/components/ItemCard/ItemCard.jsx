// {icon, text, alt}
import './itemCard.css'

export const ItemCard = ({meters, type, inmobiliaria}) => {
  return (  
    <section className="house-measures-data">
      <div>
        {/* <img src="" alt="" /> */}
        <span>{meters}</span>
      </div>

      <div className='border-end'>
        {/* <img src="" alt="" /> */}
        <span>{type}</span>
      </div>
      
      <div>
        {/* <img src="" alt="" /> */}
        <span>{inmobiliaria}</span>
      </div>
    </section>  
  )
}

// export default ItemCard