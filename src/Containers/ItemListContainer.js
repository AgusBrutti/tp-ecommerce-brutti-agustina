import { useState, useEffect   } from 'react';
import {ItemList} from '../components/itemList/ItemList';
import RingLoader from "react-spinners/RingLoader";
import {db} from './../firebase/firebase';
import {getDocs, collection} from 'firebase/firestore';

function ItemListContainer({greeting}) {

    const [listProduct, setListProducts] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    useEffect (()=> {
            //Primero llamo a la coleccion q necesito
            const productsCollection = collection(db, 'productos');
            getDocs (productsCollection)
            .then((data)=>{
                const lista = data.docs.map ((product)=>{
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setListProducts(lista);
            })
            .catch((e)=>{setError(true);})
            .finally(()=>{
                setLoading(false)
            })
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