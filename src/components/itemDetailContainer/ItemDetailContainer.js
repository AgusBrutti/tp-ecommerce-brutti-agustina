import React, { useState, useEffect   } from 'react'
import {productos} from '../../assets/productos.js'
import ItemDetail from '../itemDetail/ItemDetail.js'
import RingLoader from "react-spinners/RingLoader";
import {promiseFetch} from '../../components/promiseFetch.js'

const ItemDetailContainter = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);

    useEffect (()=> {
        const getItem = async () =>{ 
            try{
                setLoading(true)
                let res = await promiseFetch(productos)        
                setProduct(res[0]);
            }
            catch(err){
                console.error("No se encontraron productos.", err);
            }
            finally{
                setLoading(false);
            }
        }
        getItem();

    },[])

    return (
        <>
        {loading ? 
        <RingLoader color="#ec0007"size={100}  cssOverride={{margin: '50px auto 0px auto', display:'none'}} speedMultiplier={0.5}/> 
        :
        <ItemDetail item={product}/> 
        }
        </>
        )
    }
    
    export default ItemDetailContainter;