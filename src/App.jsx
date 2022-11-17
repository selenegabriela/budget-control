import { useEffect } from 'react';
import { useState } from 'react'
import ExpensesList from './components/ExpensesList';
import Header from './components/Header'
import Modal from './components/Modal';
import { generateId } from './helpers';
import newBudgetIcon from './img/nuevo-gasto.svg'


function App() {

  const [ budget, setBudget ] = useState(0);
  const [ isBudgetValid, setIsBudgetValid ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ animateModal, setAnimateModal ] = useState(false);
  const [ expenses, setExpenses ] = useState([]);
  const [ editExpense, setEditExpense ] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {

      setModal(true);
    
      setTimeout(() => {
        setAnimateModal(true);
      }, 500)
    }
  }, [editExpense]);
  
  const handleNewBudget = () => {
    setModal(true);
    setEditExpense(false);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500)
  }

  const keepExpense = (expense) => {
    expense.id = generateId();
    expense.date = new Date();
    setExpenses([...expenses, expense]);
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
          expenses={expenses}
        />
      )}
    </div>
  )
}

export default App
