import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({budget, setBudget, isBudgetValid, setIsBudgetValid}) => {
  return (
    <header>
        <h1>Budget Worksheet</h1>

        {isBudgetValid ? (
            <BudgetControl budget={budget}/>
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