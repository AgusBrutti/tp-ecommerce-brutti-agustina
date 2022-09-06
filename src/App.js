import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  const titulo="Increíbles juegos de Zombies para disfrutar con amigos y Familia!"
  return <>
    <NavBar/>
    <ItemListContainer greeting={titulo}/>
  </>;
}

export default App;
