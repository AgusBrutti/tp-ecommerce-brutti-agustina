import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addItem = (item, stock) => {
        const existItem = cart.findIndex(itemCart => itemCart.item.id == item.id);
        if (existItem !== -1){
            //filtro carrito
            const newCart= cart.filter(item=> item !== cart[existItem]);
            setCart([{item,stock}, ...newCart]);
        }else{
            setCart([...cart, {item,stock}]);
        }
    }

    const removeItem = (item) => {
        const newCart= cart.filter(oldItem=> oldItem.item !== item);
        setCart ([...newCart])
    }

    const clear = () => {
        setCart ([])
    }

    return(
        <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>{children}</CartContext.Provider>
        </>
    )
}

export default CartProvider