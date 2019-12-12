import React from 'react'

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>Description: {description}</h3>
        <p>Amount: {amount} - CreatedAt: {createdAt}</p>
    </div>
)


export default ExpenseListItem