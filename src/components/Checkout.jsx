import React from 'react';
import { useState } from 'react';
import { useCart } from "../context/CartContext";
import { collection, serverTimestamp, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, getCartTotal, cartClear} = useCart();
    
    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name] : e.target.value
            }
        )
    }
    
    const finalizarForm = (e) => {
        e.preventDefault()
        
        if(!user.name) {
            alert("Debe ingresar su nombre")
            return
        }
        
        if(!user.lastname) {
            alert("Debe ingresar su apellido")
            return
        }
        
        if(!user.tel) {
            alert("Debe ingresar su telefono")
            return
        }
        
        if(!user.adress) {
            alert("Debe ingresar su direccion")
            return
        }
        
        if(!user.email) {
            alert("Debe ingresar su correo")
            return
        }
        
        if (user.email !== validate) {
            alert("Los correos no coinciden")
            return
        }
        
        let order = {
            comprador: user,
            carrito: cart,
            total: getCartTotal(),
            date: serverTimestamp()
        }
        console.log(order)
        
        // Traemos nuestra colleccion
        const ventas = collection(db, "orders")
        // Agrego el documento
        addDoc(ventas, order)
        .then((res) => {
            // Actualizar el stock
            cart.forEach((item) => {
                const docRef = doc(db, "productos", item.id)
                getDoc(docRef)
                .then((dbDoc) => {
                    updateDoc(docRef, {
                        stock: dbDoc.data().stock - item.cantidad
                    })
                })
                .catch((error) => {
                    console.log('Se produjo un error al actualizar el stock')
                })
            })
            
            // Guardo el ID de la respuesta
            setOrderId(res.id)
            
            // Borro el carrito
            cartClear()
        })
        .catch((error) => console.log(error))
    }
    
    return (
        <div className='checkoutFormContainer'>
        {orderId !== '' ?
            <div>Se genero correctamente la orden {orderId}</div>
            :
            <div>
                <h4>Completa con tus datos</h4>
                <form action="" className='checkoutForm d-flex flex-column' onSubmit={finalizarForm}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" id="name" placeholder='Nombre' onChange={userData} />
                    
                    <label htmlFor="">Apellido</label>
                    <input type="text" name="lastname" id="lastname" placeholder='Apellido' onChange={userData} />
                    
                    <label htmlFor="">Telefono</label>
                    <input type="tel" name="tel" id="tel" placeholder='Telefono' onChange={userData} />
                    
                    <label htmlFor="">Direccion</label>
                    <input type="text" name="adress" id="adress" placeholder='Nombre' onChange={userData} />
                    
                    <label htmlFor="">Correo</label>
                    <input type="email" name="email" id="email" placeholder='Correo' onChange={userData} />
                    
                    <label htmlFor="">Repita su correo</label>
                    <input type="email" name="emailConfirm" id="emailConfirm" placeholder='Correo' onChange={(e) => {
                        setValidate(e.target.value)
                        }} />
                    
                    <button className='btn btn-primary'>Completar compra</button>
                </form> 
            </div>
        }
        </div>
    )
}

export default Checkout