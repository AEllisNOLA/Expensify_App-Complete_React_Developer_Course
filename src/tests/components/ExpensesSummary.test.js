import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test("Should show ExpenseSummary component with one expense.", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should show ExpenseSummary component with multiple expenses.", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={1234567} />)
    expect(wrapper).toMatchSnapshot()
})