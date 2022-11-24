import React from 'react'
import Expense from './Expense.jsx'

const ExpensesList = ({
  expenses, 
  setEditExpense, 
  deleteExpense,
  filter,
  filteredExpenses
}) => {
  return (
    <div className='listado-gastos contenedor'>
        {
          filter ? (
            <>
              <h2>{filteredExpenses.length ? 'Expenses' : 'There are not expenses in this category'}</h2>
              {
                filteredExpenses.map(expense => (
                  <Expense key={expense.id} expense={expense} setEditExpense={setEditExpense} deleteExpense={deleteExpense}/>
                  )) 
                }
            </>
          ) : (
            <>
              <h2>{filteredExpenses.length ? 'Expenses' : 'There are not expenses yet'}</h2>
              {
                expenses.map(expense => (
                  <Expense key={expense.id} expense={expense} setEditExpense={setEditExpense} deleteExpense={deleteExpense}/>
                ))
              }
            </>
          )
        }
    </div>
  )
}

export default ExpensesList