import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

// should return 0 if no expense
// should correctly ad up a single expense
// should correctly ad up multiple expenses

test("Should return 0 if no expense", () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0);
})

test("Should correctly add up a single expense.", () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test("Should correctly add up multiple expenses.", () => {
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(114195)
})