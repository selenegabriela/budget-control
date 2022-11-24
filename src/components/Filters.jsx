import React from 'react'

const Filters = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
        <form >
            <div className='campo'>
                <label htmlFor="">Filtering Expenses</label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="">-- All Categories --</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="expenses">Miscellaneous Expenses</option>
                    <option value="recreation">Recreation</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filters