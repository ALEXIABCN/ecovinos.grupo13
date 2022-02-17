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

const bodega2 =[
    {nombre:'Mas Sinén La Vall',descripcion:' Vino de color rojo picota de intensidad alta. Complejidad aromática, muy franco, donde predominan las frutas maduras (negras y rojas), notas minerales y hierbas de bosque. Boca potente y llena, con un tanino goloso, mineral, entero y muy fresco.',img:'https://massinen.com/wp-content/uploads/2020/06/Mas-Sinen-La-Vall-b.jpg',precio:16},
    {nombre:'Mas Sinén Coster',descripcion:'Vino de color rojo picota de intensidad alta, destellos de granate intenso. Mucha fruta negra, compotas, vivo y balsámico. Boca madura e intensa, largo y untuoso, potente y fresco.',img:'https://massinen.com/wp-content/uploads/2020/06/Coster-Mas-Sinen-b.jpg',precio:38},
    {nombre:'Mas Sinén Blanc',descripcion:'Vino Color amarillo paja. Aromas de carácter cítrico y un poco tropical acompañado de ligeras notas ahumadas y hierbas aromáticas (romaní y espliego). Boca muy untuosa y fresca, graso y largo con un final cítrico, fumado con marcada mineralidad.',img:'https://massinen.com/wp-content/uploads/2020/06/Blanc-Mas-Sinen-b.jpg',precio:20}
]
const bodega3 =[
  {nombre:'Cava Brut Nature',descripcion:'Vino elaborado con uvas de cultivo biodinámico y con mínima intervención ',img:'https://paresbalta.com/wp-content/uploads/2020/07/cava-brut-nature-pares-balta-1280x1920.jpg',precio:10},
  {nombre:'Rosa Cusiné',descripcion:'Se cosecha a mano y en pequeñas cajas para evitar la oxidación del mosto. Llegada a bodega y prensado suave',img:'https://paresbalta.com/wp-content/uploads/2017/11/cava-rosa-cusine-pares-balta.jpg',precio:21},
  {nombre:'Cuvée de Carol',descripcion:'',img:'',precio:21}
]

const bodega4 = [
  {nombre:'Vino tinto Mencía y Carrasquín 2020 (La media vuelta)',descripcion:'  Vino tinto con reposo en barrica.',img:'https://bodegalasdanzas.es/wp-content/uploads/2020/06/mencia_carrasquin_copa-716x1024.png',precio:18.90},
  {nombre:'VINO ALBARÍN BLANCO 2020',descripcion:':Vino Blanco con reposo en barrica.',img:'https://bodegalasdanzas.es/wp-content/uploads/2020/08/blanco_2020-716x1024.png',precio:19.50},
  {nombre:'VINO: Danza Prima Tinto Plurivarietale:',descripcion:' Vino tinto con reposo en barrica.',img:'https://bodegalasdanzas.es/wp-content/uploads/2021/09/danza_prima_plurivarietal-716x1024.png',precio:12}

]

const bodega5 =[
  {nombre:'Somontano eterno',descripcion:' Sabiduría de viña vieja. Cepas que han resistido viento, sol y nieve por más de 85 años.Es en el ocaso de su vida, cuando este legendario viñedo nos ofrece una garnacha de carácter profundo, enigmático, sutil y armonioso.Ni es ahora, ni es ayer; es todo. Una copa con la que detener el tiempo, caminar por una ladera cubierta de viña hasta su cima y comprender la eternidad del Somontano. ',img:'https://www.obergo.es/fotos/Antiqua.jpg',precio:30},
  {nombre:'LAGRIMAS DE OBERGO',descripcion:'Explosión sincera de fruta roja fresca, con matices florales, minerales y recuerdos a naturaleza. Muy fresco y agradable.Un rosado de lágrima con color, frescor y vitalidad para acompañar los buenos momentos que nos brinda el día.',img:'https://www.obergo.es/fotos/lagrimas.jpg',precio:5.50},
  {nombre:'OBERGO EXPRESSION BLANCO',descripcion:'Alegría y pureza en un vino recomendado para la gastronomía más vanguardista.Elaboración ÚNICA, elegante y moderna a partir de un viñedo en ladera que aporta mineralidad y aromas muy intens Vino que une la expresión de dos variedades. La energía cítrica y calidez de la chardonnay y la profundidad mineral de la sauvignon blanc',img:'https://www.obergo.es/fotos/Expression%20Blanco.jpg',precio:10.90}
]
const bodegas = [
    {name: 'Viñedos RealRubio', logo: 'https://realrubio.es/sites/default/files/visitanos-9_0.jpg', ddo: 'La Rioja', img: '', description: 'Nuestros abuelos nos transmitieron su apego a la tierra y el saber hacer', link: '',productos:bodega1},
    {name: 'Celler Burgos Porta', logo: 'https://enoguia.cat/wp-content/uploads/2017/06/burgos-porta-priorat-enoguia-08.jpg', ddo: 'DO Priorat', img: '', description: 'Som un celler del la DOQ Priorat dedicat a la viticultura des del segle XIX. Com a celler Burgos Porta hem produït el nostre primer vi ecològic al 2003, elaborat amb procés tradicional.\n', link: '',productos:bodega2},
    {name: '', logo: '', ddo: 'ddo 5', img: '', description: 'description', link: '', productos:bodega3},
    {name: 'VINOS Bodegas las danzas (Cangas)', logo: 'https://reskytnew.s3.amazonaws.com/1952/vinicia-lleida-tu-tienda-de-vinos-en-lleida-pares-balta-305564-med-200207093251.png', ddo: 'Cangas', img: 'https://bodegalasdanzas.es/wp-content/uploads/2021/09/vinos_2021.png ', description: 'Desde 2009, Vino de Cangas ostenta el reconocimiento de vino con Denominación de Origen Protegida, gracias a su condición de Vino de Calidad Producido en Regiones Determinadas.', link:'', productos:bodega4},
    {name: 'Bodega Somontano', logo: 'https://www.obergo.es/img/image/logo-obergo.png', ddo: 'Cantabría', img: 'https://rutadelvinosomontano.com/wp-content/uploads/2020/04/establec_bodegas_obergo_02.jpg', description: 'Las bodegas de Somontano son reconocidas internacionalmente por la calidad de sus vinos, construcciones atractivas y tradiciones. Por consiguiente, son uno de los principales destinos turísticos entre los amantes del vino español que desean conocer el proceso de elaboración de esta bebida.', link:'', productos:bodega5},
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
