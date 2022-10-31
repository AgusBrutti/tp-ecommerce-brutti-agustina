import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartWidget.css'

function CartWidget() {
    const {cart} = useContext(CartContext);
    const productosEnCart = cart.reduce((acc,item)=>acc + item.quantity, 0);
    return (
        <>
            <ShoppingCartOutlinedIcon color="success" fontSize="large"/> 
            {productosEnCart !== 0 ? <span className='cartBadge'>{productosEnCart}</span>: ""}
        </>


    )
}

export default CartWidget;