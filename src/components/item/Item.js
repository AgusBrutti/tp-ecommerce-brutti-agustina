import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    return (
        <>
            <div className='contenedorItem'>
                <h4>{product.name}</h4>
                <img className='imagenItem' src={require(`../../../public/images/${product.image}`)} />
                <p className='price'>${product.price}</p>
                <Link to={`/detalles/producto-${product.id}`}><button className='btn-item'>Ver detalle</button> </Link>
            </div>

        </>
    )
}
export default Item;