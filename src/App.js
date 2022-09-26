import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainter from './components/itemDetailContainer/ItemDetailContainer.js';
import PageCart from './components/carrito/PageCart';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const titulo = "Los mejores juegos de Zombies!"

  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categoria/juegos-de-mesa' element={<ItemListContainer greeting={titulo} />}/>
        <Route path='/detalles/producto-:id' element={<ItemDetailContainter />}/>
        <Route path='/carrito' element={<PageCart />}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
