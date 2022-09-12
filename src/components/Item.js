import './item.css';

const Item =({product})=>{
    return(
        <>
        <div className='contenedorItem'>
        <h4>{product.name}</h4>
        <img className='imagenItem' src={require(`../../public/images/${product.image}`)}/>
        <p className='price'>${product.price}</p>
        <button className='btn-item'>Ver detalle</button>
        </div>

        </>
    )
}
export default Item;