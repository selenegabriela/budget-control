import React from 'react'

const Expense = ({expense}) => {

    const { category, name, quantity, date, id } = expense;
    return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{category}</p>
                <p className='gasto'>{name}</p>
                <p className='cantidad'>{quantity}</p>
                <p className='cantidad'>{quantity}</p>
                <p className='cantidad'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default Expense