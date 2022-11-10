import React from 'react'
import { useState } from 'react';
import Message from './Message';

const NewBudget = ({budget, setBudget, setIsBudgetValid}) => {

    const [ message, setMessage ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!budget || budget < 0) {
            setMessage('No es un presupuesto válido');

            return
        }

        setMessage('');
        setIsBudgetValid(true);
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleSubmit} className='formulario'>
                <div className='campo'>
                    <label>Set Budget</label>

                    <input 
                        className='nuevo-presupuesto'
                        type='number'
                        placeholder='Set your Budget'
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value='Add' />

                {message && <Message type='error'>{message}</Message>}
            </form>
        </div>
  )
}

export default NewBudget