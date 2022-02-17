import './App.css';
import bg from './assets/background.png'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Card} from "./components/card/Card";
import React, { useState } from 'react';
import Products from './components/Products/Products';


const bodega1 =[
  {nombre:'Real Rubio Rosado',descripcion:'El mosto rosado es sangrado en el momento oportuno para conseguir tanto el color como los aromas deseados',img:'https://realrubio.es/sites/default/files/styles/vino-teaser/public/vinos/real_rubio_rose_1_0.png?itok=34qOqiOB',precio:23},
  {nombre:'Real Rubio Tinto',descripcion:'color rojo cereza picota, con atractivos azules y violeta. Aromas frutales combinados con las moras y frutos silvestres',img:'https://realrubio.es/sites/default/files/styles/vino-full/public/vinos/joven_ecologico_.png?itok=JO2qlzMb',precio:18},
  {nombre:'Real Rubio Crianza',descripcion:'Vino elaborado con uvas procedentes de parcelas de nuestra propiedad de cultivo ecológico y practicas  respetuosas con el medio ambiente',img:'https://realrubio.es/sites/default/files/styles/vino-full/public/vinos/crianza_ecologico_0.png?itok=tAsaVg9A',precio:15}
]




const bodegas = [
    {name: 'Viñedos RealRubio', logo: 'https://realrubio.es/sites/default/files/visitanos-9_0.jpg', ddo: 'La Rioja', img: '', description: 'Nuestros abuelos nos transmitieron su apego a la tierra y el saber hacer', link: '',productos:bodega1},
    {name: '', logo: '', ddo: 'ddo 2', img: '', description: 'description', link: ''},
    {name: 'bodega 3', logo: '', ddo: 'ddo 3', img: '', description: 'description', link: ''},
    {name: 'bodega 4', logo: '', ddo: 'ddo 4', img: '', description: 'description', link: ''},
    {name: 'bodega 5', logo: '', ddo: 'ddo 5', img: '', description: 'description', link: ''},
]



function App() {

  const [target, setTarget] = useState([])
  console.log(target)

   
   


  return (
    <div className="App">
      <Header />
        <main>
            <img className='bg' src={bg} alt=""/>
            <div className="cardList">
                {bodegas.map(({ddo, img, link, description, logo, name,productos}, idx)=> {
                    return <Card
                        name={name}
                        ddo={ddo}
                        description={description}
                        link={link}
                        img={img}
                        logo={logo}
                        key={`bodega-${idx}`}
                        setTarget={setTarget}
                        productos={productos}
                    />
                })}
            </div>
            <div className='containerProducts'>

              {
                target.map(({nombre,descripcion,img,precio}) =>(
                  <Products
                    name={nombre}
                    description={descripcion}
                    precio={precio}
                    img={img}
                  />
                ))
              }


            </div>
            <Footer />
        </main>
      
    </div>
  );
}

export default App;
