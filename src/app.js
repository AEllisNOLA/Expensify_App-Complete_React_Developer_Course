// THIRD-PARTY
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// ROUTERS
import AppRouter from './routers/AppRouter'

// COMPONENTS

// STORES
import configureStore from './store/configureStore'

// ACTIONS
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

// SELECTORS
import getVisibleExpenses from './selectors/expenses'

// STYLES
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})



store.dispatch(addExpense({ description: 'Water bill', note: 'For December', amount: 3700, createdAt: 20112523500 }))
store.dispatch(addExpense({ description: 'Gas bill', note: 'For December', amount: 4200, createdAt: -1231125123500 }))
store.dispatch(addExpense({ description: 'Rent', note: 'For December', amount: 109500, createdAt: 1012312313500}))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))