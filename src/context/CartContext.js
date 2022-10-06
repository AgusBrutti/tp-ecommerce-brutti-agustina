import { createContext, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, quantity) => {
        const existItem = cart.findIndex(itemCart => itemCart.item.id == item.id);
        if (existItem !== -1){
            //filtro carrito
            const newCart= cart.filter(item=> item !== cart[existItem]);
            setCart([{item,quantity}, ...newCart]);
        }else{
            setCart([...cart, {item,quantity}]);
        }
    }

    const removeItem = (item) => {
        const newCart= cart.filter(oldItem=> oldItem.item !== item);
        setCart ([...newCart])
    }

    const clear = () => {
        setCart ([])
    }

    const isInCart = () => {
        return cart.length > 0;
    }

    const totalPrice = () =>{
            return cart.reduce((acc, product) => acc += (product.item.price * product.quantity), 0);
    }

    const finalizarCompra = () => {
    Swal.fire({
        text: `La compra ha sido realizada con éxito.`,
        icon: 'success',
        confirmButtonText: 'Ok'
    });
};

    return(
        <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart,totalPrice, finalizarCompra}}>{children}</CartContext.Provider>
        </>
    )
}

export default CartProvider