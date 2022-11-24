import React, { useEffect } from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({expenses, setExpenses, budget, setBudget, isBudgetValid, setIsBudgetValid}) => {

  return (
    <header>
        <h1>Budget Worksheet</h1>

        {isBudgetValid ? (
            <BudgetControl expenses={expenses} setExpenses={setExpenses} budget={budget} setBudget={setBudget} setIsBudgetValid={setIsBudgetValid}/>
        ) : (
            <NewBudget
                budget={budget} 
                setBudget={setBudget}
                setIsBudgetValid={setIsBudgetValid}
            />
        )}

    </header>
  )
}

export default Header