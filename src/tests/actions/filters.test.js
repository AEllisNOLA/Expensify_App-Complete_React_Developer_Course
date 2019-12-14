import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test("Should generate an action object to set start date to given time", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

})

test("Should generate an action object to set end date to given time", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

})
test("Should generate action object for sortBy to 'date'", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test("Should generate action object for sortBy to 'amount'", () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})


test("Should generate an action object to set text filter to given value", () => {
    const text = 'New value'
    const action = setTextFilter(text)
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test("Should generate an action object to set text filter to default value", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

