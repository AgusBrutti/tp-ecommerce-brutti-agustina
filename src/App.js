import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainter from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {
  const titulo="Increíbles juegos de Zombies para disfrutar con amigos y Familia!"

  return <>
    <NavBar/>
    <ItemListContainer greeting={titulo}/>
    <ItemDetailContainter/>
  </>;
}

export default App;
