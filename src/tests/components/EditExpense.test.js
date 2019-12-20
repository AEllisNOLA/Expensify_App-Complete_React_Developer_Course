import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpense} from '../..//components/EditExpense'



let startEditExpense, startRemoveExpense, history, wrapper
beforeEach(() => {
    startRemoveExpense = jest.fn()
    startEditExpense = jest.fn()
    history = {push: jest.fn()}

    wrapper = shallow(<EditExpense 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[1]}
    />)
})

test("Should render EditExpense component.", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Should handle EditExpense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})


test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
})

