import { useState, useEffect   } from 'react'
import {productos} from '../assets/productos.js'
import {promiseFetch} from '../components/promiseFetch.js'
import {ItemList} from '../components/itemList/ItemList'
import RingLoader from "react-spinners/RingLoader";
// import ItemDetailContainter from '../components/itemDetailContainer/ItemDetailContainer.js';

function ItemListContainer({greeting}) {

    const [listProduct, setListProducts] = useState([]);
    const [loading, setLoading] = useState (true);

    useEffect (()=> {
        setLoading(true)
        promiseFetch(productos)
        .then(res=> {
            setLoading(false)
            setListProducts(res)
        })
        // .catch(err => console.log(err))

    },[])

    return (
        <>
        <h3 className="title-home">{greeting}</h3>
        {loading ? 
        <RingLoader color="#ec0007"size={100}  cssOverride={{margin: '50px auto 0px auto'}} speedMultiplier={0.5}/> 
        : 
        <ItemList listProduct={listProduct}/> }

        </>
        )
    }
    
    export default ItemListContainer;