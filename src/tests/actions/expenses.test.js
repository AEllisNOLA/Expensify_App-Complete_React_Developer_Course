import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should generate an action object to removeExpense', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should generate an action object to editExpense.', () => {
    const action = editExpense('123abc', {
        description: 'Description',
        amount: '12300',
        note: 'Note'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Description',
            amount: '12300',
            note: 'Note'
        }
    })
})

test('Should generate an action object to addExpense with the given values', () => {
    const expenseData = {
        description: 'My Description',
        note: 'My Note',
        amount: 1200,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should generate an action object to addExpense with the default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})
