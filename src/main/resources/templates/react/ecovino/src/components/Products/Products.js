import React from 'react'

const Products = ({name,img,description,precio}) => {
  return (
    <div className='cardProduct'>
        <div className='' > 
            <div className="nameProduct">
                <strong>{name}</strong>
            </div>
            <img  src={img} className="cardLogoProduct" alt='' />
        </div>
        <div>
            <div className="cardDescription">
                {description}
            </div>
            <div>precio:{precio}</div>
        </div>
        <div>
            <button className='butonProduct'>Añadir</button>
        </div>
    </div>
  )
}

export default Products