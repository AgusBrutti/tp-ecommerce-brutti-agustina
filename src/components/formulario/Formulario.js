import React, {useContext, useState} from "react";
import './formulario.css';
import { CartContext } from "../../context/CartContext.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from '../../firebase/firebase';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';
import {serverTimestamp} from 'firebase/firestore'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

const Formulario = () => {
    const {clear,totalPrice,cart} = useContext(CartContext)
    
    const [error, setError] = useState(false);
    
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        email: ""
    }) 

        //Se va almacenando a mi variable usuario, a medida que escribo
    const handlerChange = (e)=>{
        setUsuario ({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    const endCompra = (e) =>{
        e.preventDefault()
        if(usuario.nombre !== '' && usuario.apellido !== '' && usuario.email !== ''){
            const ventasCollection =collection(db,"ventas2");
            addDoc(ventasCollection, {
                    datosComprador: usuario,
                    items: cart,
                    createdAt: serverTimestamp(),
                    total: totalPrice()
                })
                .then(result=>
                    {
                        Swal.fire({
                            title: "Tu orden fue enviada con éxito!",
                            text: `Tu numero de orden es: ${result.id}`,
                            icon: "success",
                            button: "Ok"
                        })
                        .then((resultado)=>{
                            window.location = "/carrito";
                        })
                        clear();
                    })
                .catch(e=>{setError(true);})
        }
        else{
            Swal.fire({
                title: "Hubo un error en tus datos",
                text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
                icon: "error",
                button: "Ok",
            })
        }
    }

    return (
    <>
        <div className="spanForm">
        <span>Para finalizar compra complete los siguientes datos:</span>
        </div>
        <div className="contenedorForm">
            <form className="formulario-cart" onSubmit={endCompra} onChange={handlerChange}>
            <input  name="nombre" className="formulario" type="text" placeholder="Ingrese su Nombre" required/>
            <input  name="apellido" className="formulario" type="text" placeholder="Ingrese su Apellido" required/>
            <input  name="email" className="formulario" type="text" placeholder="Ingrese su Email" required/>
            <button className='btn-finalizar' >Finalizar compra</button>
            </form>
        </div> 
    </>
    )
}

export default Formulario