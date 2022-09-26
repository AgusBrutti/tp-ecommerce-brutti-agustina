import './itemDetail.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import ItemCount from '../../components/itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const messageFuncion = (count) => {
        Swal.fire({
            text: `Agregaste ${count} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }

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
                <ItemCount stock={item.stock} initial={1} onAdd={messageFuncion} />
                </div>
                </div>
            </div>
        :
        ""}
        </>
    )
}
export default ItemDetail;