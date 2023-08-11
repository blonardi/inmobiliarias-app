import React from 'react'

const ItemCard = ({icon, text, alt}) => {
  return (
      <div>
        <img src={icon} alt={alt} />
        <span>{text}</span>
      </div>
  )
}

export default ItemCard