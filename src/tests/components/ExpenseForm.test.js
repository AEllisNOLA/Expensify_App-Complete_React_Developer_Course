import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test("Should render ExpenseForm correctly.", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test("Should render ExpenseForm with Expense data correctly", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("Should set description on input change.", () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe('New Description')
})

test("Should set note on input change.", () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.find('textarea').simulate('change', {
        target: { value }
    }))
    expect(wrapper.state('note')).toBe('New Note')
})

test("Should set amount if input is valid", () => {
    const value = '123.00'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.find('input').at(1).simulate('change', {
        target: { value }
    }))
    expect(wrapper.state('amount')).toBe(value)
})

test("Should not set amount if input is invalid", () => {
    const value = '123.001'
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.find('input').at(1).simulate('change', {
        target: { value }
    }))
    expect(wrapper.state('amount')).toBe('')
})

test("Should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt
    })
})

test("Should set a new date on date change", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(now)
})

test("Should set calendar focus on change", () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})