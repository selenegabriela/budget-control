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
  const [ expenses, setExpenses ] = useState([])

  const handleNewBudget = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500)
  }

  const keepExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);
  }

  return (
    <div>
      <Header 
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
        />
      )}
    </div>
  )
}

export default App
