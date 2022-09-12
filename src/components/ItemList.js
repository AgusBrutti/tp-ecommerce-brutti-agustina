import Item from "./Item"
import './itemList.css'

const ItemList = ({listProduct}) => {

    return(
        <>
        <p className="tp6">Tp clase 6</p>
        <div className='contenedor' id='contenedor-item'>
        {listProduct.map((prod, i )=> <Item key={`${prod.name}-${i}`} product={prod}/>)}
        </div>
        </>
    )
}
export {ItemList};