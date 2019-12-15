import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper
beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />)
})


test("Should render addExpense correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Should handle onSubmit.", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})
