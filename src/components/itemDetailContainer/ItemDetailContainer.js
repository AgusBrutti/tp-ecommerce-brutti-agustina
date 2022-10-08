import React, { useState, useEffect   } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail.js';
import RingLoader from "react-spinners/RingLoader";
import {db} from '../../firebase/firebase'
import {getDoc, collection, doc} from 'firebase/firestore';

const ItemDetailContainter = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    const {id} = useParams();

    useEffect (()=> {
            const productsCollection =collection(db, 'productos');
            const refDoc = doc(productsCollection, id)
            getDoc(refDoc)
            .then((result)=>{
                setProduct({
                    id:result,
                    ...result.data()
                })
            })
            .catch((e)=>{setError(true);})
            .finally(()=>{
                setLoading(false)
            })
    },[id])

    return (
        <>
        {loading ? 
        <RingLoader color="#ec0007"size={100}  cssOverride={{margin: '50px auto 0px auto'}} speedMultiplier={0.5}/> 
        :
        <ItemDetail item={product}/> 
        }
        </>
        )
    }
    
    export default ItemDetailContainter;