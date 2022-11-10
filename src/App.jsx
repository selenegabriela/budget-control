import { useState } from 'react'
import Header from './components/Header'


function App() {

  const [ budget, setBudget ] = useState(0);
  const [ isBudgetValid, setIsBudgetValid ] = useState(false);

  return (
    <div>
      <Header 
        budget={budget} 
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid} 
      />
    </div>
  )
}

export default App
