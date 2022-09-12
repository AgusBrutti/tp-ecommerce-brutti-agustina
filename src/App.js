import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import ItemCount from './components/ItemCount';

function App() {
  const titulo="Increíbles juegos de Zombies para disfrutar con amigos y Familia!"

  const messageFuncion = (count)=>{
    Swal.fire({
      text: `Agregaste ${count} productos al carrito.`,
      icon: 'success',
      confirmButtonText: 'Ok'
  });
  }

  return <>
    <NavBar/>
    <ItemListContainer greeting={titulo}/>
    <ItemCount stock={15} initial={1} onAdd={messageFuncion} />
  </>;
}

export default App;
