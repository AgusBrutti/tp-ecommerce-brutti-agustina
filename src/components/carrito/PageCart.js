import './pageCart.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, removeItem, clear, isInCart, totalPrice } = useContext(CartContext);

    return (
        <>
            <Link to={`/categoria/juegos-de-mesa`} className="btn-volver-atras"><h3 className='btn-volver2'>VOLVER</h3></Link>
            <h1 className="titleCart">Productos en carrito</h1>
            {/* Consulto si hay productos en el carrito */}
            {isInCart() ?
                <>
                    <div className='containterCartLista'>
                        <h3>PRODUCTO</h3>
                        <h3 className='widthin'>PRECIO POR UNIDAD</h3>
                        <h3>CANTIDAD</h3>
                        <h3>PRECIO TOTAL POR CANTIDAD</h3>
                    </div>
                    <button className='btnCart2' onClick={() => clear()}>Quitar todos</button> 
            
            {/* Armo la lista de productos que se agregaron. */}
            {cart.map(({ item, quantity }) =>
                <>
                    <div key={`${item.name}-${quantity}`}>
                        <div className='containterCart'>
                            <h1>{item.name}</h1>
                            <p>${item.price}</p>
                            <p>{quantity}</p>
                            <p>${item.price * quantity}</p>
                            <button className='btnCart' onClick={() => removeItem(item)}>Quitar</button>
                        </div>
                        <hr />
                    </div>
                </>
            )}
            <div className='divFinalPrice'> 
                <span>Precio final: ${totalPrice()} </span>
                <button className='btn-finalizar-cart'> <Link to="/formularioDeCompra" className='linkToCart'>Siguiente </Link></button>
            </div>
            </>
            :
            <h1 className='h1Cart'>Aún no tenés nada en el carrito! Podes empezar a comprar <Link to={`/categoria/juegos-de-mesa`}>aquí!</Link></h1>}
        </>
    )
}

export default Cart;