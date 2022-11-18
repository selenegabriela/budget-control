import { useEffect } from 'react';
import { useState } from 'react'
import ExpensesList from './components/ExpensesList';
import Header from './components/Header'
import Modal from './components/Modal';
import { generateId } from './helpers';
import newBudgetIcon from './img/nuevo-gasto.svg'


function App() {
  const localBudget = Number(localStorage.getItem('budget')) ?? 0;
  const localExpenses = JSON.parse(localStorage.getItem('expenses')) ?? [];
  const [ budget, setBudget ] = useState(localBudget);
  const [ isBudgetValid, setIsBudgetValid ] = useState(localBudget ? true : false);
  const [ modal, setModal ] = useState(false);
  const [ animateModal, setAnimateModal ] = useState(false);
  const [ expenses, setExpenses ] = useState(localExpenses);
  const [ editExpense, setEditExpense ] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {

      setModal(true);
    
      setTimeout(() => {
        setAnimateModal(true);
      }, 500)
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem('budget', budget);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [budget, expenses])
  
  const handleNewBudget = () => {
    setModal(true);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500)
  }

  const deleteExpense = id => {
    const updatedExpense = expenses.filter(e => e.id !== id);
    setExpenses(updatedExpense);
  }

  const keepExpense = (expense) => {
    if(expense.id) {
      const updatedExpense = expenses.map(e => e.id === expense.id ? expense : e);
      setExpenses(updatedExpense);
      setEditExpense({})
    } else {
      expense.id = generateId();
      expense.date = new Date();
      setExpenses([...expenses, expense]);
    }

  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        expenses={expenses}
        budget={budget} 
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid} 
      />

      {isBudgetValid && (
        <>
          <main>
            <ExpensesList 
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={newBudgetIcon} 
              alt="icon new budget"
              onClick={handleNewBudget}
              />
          </div>
        </>
      )}

      {modal && (
        <Modal 
          budget={budget}
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          keepExpense={keepExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
          expenses={expenses}
        />
      )}
    </div>
  )
}

export default App
