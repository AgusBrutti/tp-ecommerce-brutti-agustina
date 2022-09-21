import Item from "../item/Item"
import './itemList.css'

const ItemList = ({listProduct}) => {

    return(
        <>
        <div className='contenedor' id='contenedor-item'>
        {listProduct.map((prod, i )=> <Item key={`${prod.name}-${i}`} product={prod}/>)}
        </div>
        </>
    )
}
export {ItemList};