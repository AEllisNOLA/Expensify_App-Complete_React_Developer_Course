import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpense} from '../..//components/EditExpense'
import { exportAllDeclaration } from '@babel/types'

let editExpense, removeExpense, history, wrapper
beforeEach(() => {
    removeExpense = jest.fn()
    editExpense = jest.fn()
    history = {push: jest.fn()}

    wrapper = shallow(<EditExpense 
        editExpense={editExpense} 
        removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[1].id
    })
})