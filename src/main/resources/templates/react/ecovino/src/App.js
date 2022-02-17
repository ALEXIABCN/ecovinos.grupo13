import './App.css';
import bg from './assets/background.png'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Card} from "./components/card/Card";
import React, { useEffect, useState } from 'react';
import Products from './components/Products/Products';


const bodega1 =[
  {nombre:'Real Rubio Rosado',descripcion:'El mosto rosado es sangrado en el momento oportuno para conseguir tanto el color como los aromas deseados',img:'https://realrubio.es/sites/default/files/styles/vino-teaser/public/vinos/real_rubio_rose_1_0.png?itok=34qOqiOB',precio:23},
  {nombre:'Real Rubio Tinto',descripcion:'color rojo cereza picota, con atractivos azules y violeta. Aromas frutales combinados con las moras y frutos silvestres',img:'https://realrubio.es/sites/default/files/styles/vino-full/public/vinos/joven_ecologico_.png?itok=JO2qlzMb',precio:18},
  {nombre:'Real Rubio Crianza',descripcion:'Vino elaborado con uvas procedentes de parcelas de nuestra propiedad de cultivo ecológico y practicas  respetuosas con el medio ambiente',img:'https://realrubio.es/sites/default/files/styles/vino-full/public/vinos/crianza_ecologico_0.png?itok=tAsaVg9A',precio:15}
]

const bodega2 =[
    {nombre:'Mas Sinén La Vall',descripcion:' Vino de color rojo picota de intensidad alta. Complejidad aromática, muy franco, donde predominan las frutas maduras (negras y rojas), notas minerales y hierbas de bosque. Boca potente y llena, con un tanino goloso, mineral, entero y muy fresco.',img:'https://massinen.com/wp-content/uploads/2020/06/Mas-Sinen-La-Vall-b.jpg',precio:16},
    {nombre:'Mas Sinén Coster',descripcion:'Vino de color rojo picota de intensidad alta, destellos de granate intenso. Mucha fruta negra, compotas, vivo y balsámico. Boca madura e intensa, largo y untuoso, potente y fresco.',img:'https://massinen.com/wp-content/uploads/2020/06/Coster-Mas-Sinen-b.jpg',precio:38},
    {nombre:'Mas Sinén Blanc',descripcion:'Vino Color amarillo paja. Aromas de carácter cítrico y un poco tropical acompañado de ligeras notas ahumadas y hierbas aromáticas (romaní y espliego). Boca muy untuosa y fresca, graso y largo con un final cítrico, fumado con marcada mineralidad.',img:'https://massinen.com/wp-content/uploads/2020/06/Blanc-Mas-Sinen-b.jpg',precio:20}
]

const bodegas = [
    {name: 'Viñedos RealRubio', logo: 'https://realrubio.es/sites/default/files/visitanos-9_0.jpg', ddo: 'La Rioja', img: '', description: 'Nuestros abuelos nos transmitieron su apego a la tierra y el saber hacer', link: '',productos:bodega1},
    {name: 'Celler Burgos Porta', logo: 'https://enoguia.cat/wp-content/uploads/2017/06/burgos-porta-priorat-enoguia-08.jpg', ddo: 'DO Priorat', img: '', description: 'Som un celler del la DOQ Priorat dedicat a la viticultura des del segle XIX. Com a celler Burgos Porta hem produït el nostre primer vi ecològic al 2003, elaborat amb procés tradicional.\n', link: '',productos:bodega2},
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
                {
                  target.map(({nombre,descripcion,img,precio}) =>(
                    <Products
                      nombre={nombre}
                      description={descripcion}
                      precio={precio}
                      img={img}
                    />
                  ))
                }
            </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;
