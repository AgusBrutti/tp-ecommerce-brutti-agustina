import './pageCart.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear}= useContext(CartContext);
    return (
        <>
            <h1 className="titleCart">Productos en carrito</h1>
            {/* Consulto si hay productos en el carrito */}
            {cart.length > 0 ? <button className='btnCart2' onClick={()=>clear()}>Quitar todos</button> : <h1 className='h1Cart'>Aún no tenés nada en el carrito! Podes empezar a comprar <Link to={`/categoria/juegos-de-mesa`}>aquí!</Link></h1>}
            {/* Armo la lista de productos que se agregaron. */}
            {cart ? cart.map(({item}) => 
            <>
            <div className='containterCart'>
            <h1 key={item.id}>{item.name}</h1>
            <p>${item.price}</p>
            <p>{item.contador}</p>
            <button className='btnCart' onClick={()=>removeItem(item)}>Quitar</button>
            </div>
            </>
            )
            :
            "Vacío"}
        </>
    )
}
export default Cart;