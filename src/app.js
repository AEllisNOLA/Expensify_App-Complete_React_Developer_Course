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
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'))