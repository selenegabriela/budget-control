import React, { useState } from 'react'
import { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({expenses, setExpenses, budget, setBudget, setIsBudgetValid}) => {


    const [ spent, setSpent ] = useState(0);
    const [ available, setAvailable ] = useState(0);
    const [ percentage, setPercentage ] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
        setSpent(totalSpent);   

        const totalAvailable = budget - totalSpent;
        setAvailable(totalAvailable)
    }, [expenses])

    useEffect(() => {
        const totalPercentage = ((spent * 100) / budget).toFixed(2);
        setTimeout(() => {
            setPercentage(totalPercentage);
        }, 500);
    }, [percentage, spent, budget])

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    const handleResetApp = () => {

        const result = confirm('Do you want to reset the app?');
        if(result){
            setExpenses([]);
            setBudget(0);
            setIsBudgetValid(false);
        }
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <button onClick={handleResetApp} type='button' className='reset-app'>Reset App</button>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={percentage}
                    text={`${percentage}% Spent`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Budget: </span>{formatQuantity(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Available: </span>{formatQuantity(available)}
                </p>
                <p>
                    <span>Spent: </span>{formatQuantity(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl