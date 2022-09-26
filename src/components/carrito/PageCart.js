// import './item.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import ItemCount from '../../components/itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Cart = ({ product }) => {
    const messageFuncion = (count) => {
        Swal.fire({
            text: `Agregaste ${count} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }
    return (
        <>
            <div>Aun estoy armando la pagina</div>
            {/* <div className='contenedorItem'>
                <h4>{product.name}</h4>
                <img className='imagenItem' src={require(`../../../public/images/${product.image}`)} />
                <p className='price'>${product.price}</p>
                <Link to={`/detalles/${product.id}`}><button className='btn-item'>Ver detalle</button> </Link>
                <ItemCount stock={product.stock} initial={1} onAdd={messageFuncion} />
            </div> */}

        </>
    )
}
export default Cart;