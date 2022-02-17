import React from 'react'

const Products = ({name,img,description,precio}) => {
  return (
    <div>
        <div className='card'> 
            <div className="name">
                <strong>{name}</strong>
            </div>
            <img  src={img} className="cardLogo" alt='' />
        </div>
        <div>
            <div className="cardDescription">
                {description}
            </div>
            <div>precio:{precio}</div>
        </div>
        <div>
            <button>Añadir</button>
        </div>
    </div>
  )
}

export default Products