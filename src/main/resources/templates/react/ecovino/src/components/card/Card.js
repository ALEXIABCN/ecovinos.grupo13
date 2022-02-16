
const Card = ({name, logo, ddo, img, description, link = '', })=> {
    return <div className='card'>
        <div className="cardHeader">
            <img  src={logo} className="cardLogo" alt='' />
            <div className="cardHeaderData">
                <div className="name">
                    {name}
                </div>
                <div className="ddo">
                    {ddo}
                </div>
            </div>
        </div>
        <div className="cardBody">
            <div className="cardImage">
                <img src={img} alt=""/>
            </div>
            <div className="cardDescription">
                {description}
            </div>
        </div>
        <div className="cardFooter">
            <button>
                Products
            </button>
        </div>
    </div>
}

export { Card };