import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { defaultCipherList } from 'constants'

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
    <div>
    
        <h3>Description: {description}</h3>
        <p>Amount: {amount} - CreatedAt: {createdAt}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({id}))

            

            
          
        }}>Remove</button>
    </div>
)


export default connect()(ExpenseListItem)


// import action generator
// connect component to access dispatch
// wire up the onclick
// use id
// you don't have to mapStateToProps
