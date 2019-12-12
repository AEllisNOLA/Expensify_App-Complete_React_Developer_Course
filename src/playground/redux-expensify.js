import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// EXPENSE ACTIONS

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// FILTERS ACTIONS
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES REDUCER
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id))
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id = action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

// FILTERS REDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 70000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 800 }))
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter(''))
/*
const demoState = {
    expenses: [{
        id: 'abcdefgh',
        description: 'January rent',
        note: 'Final payment on the old apartment.',
        amount: '50000',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
*/
