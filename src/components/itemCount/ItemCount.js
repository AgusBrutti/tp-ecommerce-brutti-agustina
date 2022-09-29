import React, {useState} from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { dark } from '@mui/material/styles/createPalette';
import './itemCount.css'

const Boton = ({stock, initial, onAdd}) => {
    const [contador, setContador] =useState(initial);
    const [cantidad, setCantidad]= useState(0);

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }else{
            toast.warn('Superaste el stock permitido!', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
    }

    const restar = () => {
        if(contador > initial){
            setContador(contador - 1);
        }else{
            toast.warn('No podes agregar 0 productos.', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
    }

    const reset = () => {
        setContador(initial);
    }

    const agregar = () => {
        let nuevaCantidad = cantidad + contador;
        if (nuevaCantidad <= stock){
            setCantidad(nuevaCantidad);
            onAdd(contador);
        }else{
            Swal.fire({
                text: 'No hay más stock del producto.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }

    return(
        <>
        <div className='containerCont'>
        <button className='btn-contador' onClick={sumar}> + </button>
        <h1 className='h1Contador'>{contador}</h1>
        <button className='btn-contador' onClick={restar}> - </button>
        </div>
        <button className='btn-contador' onClick={reset}> reset </button>
        <button className='btn-agregar' onClick={agregar}> Agregar al carrito </button>
        <ToastContainer />
        </>
    )
}

export default Boton;