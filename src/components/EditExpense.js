import React from 'react';

const EditExpense = (props) => {
    console.log(props)
    return (
        <div>
        <h1>EditExpense Component</h1>
        <p>Editing {props.match.params.id}</p></div>
    )
}

export default EditExpense;