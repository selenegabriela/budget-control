import React from 'react'
import Expense from './Expense.jsx'

const ExpensesList = ({expenses, setEditExpense, deleteExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expenses.length ? 'Expenses' : 'There are not expenses yet'}</h2>
        
        {expenses.map(expense => (
          <Expense key={expense.id} expense={expense} setEditExpense={setEditExpense} deleteExpense={deleteExpense}/>
        ))}
    </div>
  )
}

export default ExpensesList