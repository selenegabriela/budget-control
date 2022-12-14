import React, { useState } from 'react'
import { useEffect } from 'react';
import closeBtn from '../img/cerrar.svg'
import Message from './Message';

const Modal = (
    {
        setModal, 
        animateModal, 
        setAnimateModal, 
        keepExpense,
        budget,
        setEditExpense,
        editExpense
    }) => {
       
        const [message, setMessage] = useState('')
        const [name, setName] = useState('');
        const [quantity, setQuantity] = useState('');
        const [category, setCategory] = useState('');
        const [date, setDate] = useState('');
        const [id, setId] = useState('')

        useEffect(() => {
            if(Object.keys(editExpense).length > 0) {
                setName(editExpense.name);
                setQuantity(editExpense.quantity);
                setCategory(editExpense.category);
                setId(editExpense.id);
                setDate(editExpense.date);
            }
        }, [])

    const closeModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
        setEditExpense({})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if([name, quantity, category].includes('')){
            setMessage('All fields are required')
            setTimeout(() => {
                setMessage('');
            }, 3000)
            return
        }
        
        keepExpense({name, quantity, category, date, id})
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500)
        setEditExpense({})
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img 
                    src={closeBtn} 
                    alt="close button" 
                    onClick={closeModal}
                />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                {message && <Message type='error'>{message}</Message>}
                <legend>{!editExpense.name ? 'New Expense' : 'Edit Expense'}</legend>
                <div className='campo'>
                    <label htmlFor="name">Expense Name</label>
                    <input 
                        id='name'
                        type="text"
                        placeholder='Add the Expense Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        id='quantity'
                        type="number"
                        placeholder='Add the Expense Quantity: e.g. 300' 
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                    <label htmlFor="category">Category</label>
                    <select 
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}    
                    >
                        <option value="">-- Choose --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="expenses">Miscellaneous Expenses</option>
                        <option value="recreation">Recreation</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>

                <input 
                    type="submit"
                    value={!editExpense.name ? 'Add Expense' : 'Keep Changes'} 
                />
            </form>
        </div>
    )
}

export default Modal