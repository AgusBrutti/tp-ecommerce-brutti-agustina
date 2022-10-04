import React, {useContext, useState} from 'react';
import './itemDetail.css';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import ItemCount from '../../components/itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {

    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const {cart,addItem} = useContext(CartContext);
    const onAdd = (count) => {
            addItem(item,count);
            setFinalizarCompra(true);
            console.log('Agregaste ' + count);
    //     Swal.fire({
    //         text: `Agregaste ${count} productos al carrito.`,
    //         icon: 'success',
    //         confirmButtonText: 'Ok'
    //     });
    };

    return (
        <>
        {item ? 
            <div className='contenedorItemDetail'>
                <Link to={`/categoria/juegos-de-mesa`}><h3 className='btn-volver'>VOLVER</h3></Link>
                <h4 className='itemDetailName'>{item.name}</h4>
                <div className='contenedorItemDetail2'>
                <img className='imagenItemDetail' src={require(`../../../public/images/${item.image}`)} />
                <div className='grid-container'>
                <p className='itemDetailPrice grid-item'>${item.price}</p>
                <h4 className='grid-item'>Descripcion del producto:</h4>
                <p className='itemDetailDescription grid-item'>{item.descripcion}</p>
                    {
                        finalizarCompra ? <Link to='/carrito'> <button className='btn-finalizar'> Finalizar compra  </button></Link>
                        :
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    }
                </div>
                </div>
            </div>
        :
        ""}
        </>
    )
}
export default ItemDetail;