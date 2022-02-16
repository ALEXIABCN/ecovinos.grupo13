import './App.css';
import bg from './assets/background.png'
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Card} from "./components/card/Card";

const bodegas = [
    {name: 'bodega 1', logo: '', ddo: 'ddo 1', img: '', description: 'description', link: ''},
    {name: 'bodega 2', logo: '', ddo: 'ddo 2', img: '', description: 'description', link: ''},
    {name: 'bodega 3', logo: '', ddo: 'ddo 3', img: '', description: 'description', link: ''},
    {name: 'bodega 4', logo: '', ddo: 'ddo 4', img: '', description: 'description', link: ''},
    {name: 'bodega 5', logo: '', ddo: 'ddo 5', img: '', description: 'description', link: ''},
]

function App() {
  return (
    <div className="App">
      <Header />
        <main>
            <img className='bg' src={bg} alt=""/>
            <div className="cardList">
                {bodegas.map(({ddo, img, link, description, logo, name}, idx)=> {
                    return <Card
                        name={name}
                        ddo={ddo}
                        description={description}
                        link={link}
                        img={img}
                        key={`bodega-${idx}`}
                    />
                })}
            </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;
