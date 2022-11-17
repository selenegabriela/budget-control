import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css"
import { formatDate } from '../helpers';
import SaveIcon from '../img/icono_ahorro.svg';
import HomeIcon from '../img/icono_casa.svg';
import FoodIcon from '../img/icono_comida.svg';
import ExpensesIcon from '../img/icono_gastos.svg';
import RecreationIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SubscriptionIcon from '../img/icono_suscripciones.svg';

const dictionaryIcons = {
    saving: SaveIcon,
    food: FoodIcon,
    home: HomeIcon,
    expenses: ExpensesIcon,
    recreation: RecreationIcon,
    health: HealthIcon,
    subscriptions: SubscriptionIcon
}

const Expense = ({expense, setEditExpense}) => {

    const { category, name, quantity, date, id } = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('delete...')}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={dictionaryIcons[category]} alt="icon" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='gasto'>{name}</p>
                            <p className='feha-gasto'>
                                Added on: {''}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${quantity}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
  )
}

export default Expense