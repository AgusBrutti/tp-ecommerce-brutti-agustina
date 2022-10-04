// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartWidget.css'

function CartWidget() {
    const {cart} = useContext(CartContext);
    return (
        <>
            <ShoppingCartOutlinedIcon color="success" fontSize="large"/> 
            {cart.length > 0 ? <span className='cartBadge'>{cart.length}</span> : ""}
            {/* </ShoppingCartOutlinedIcon> */}
        </>


    )
}

export default CartWidget;