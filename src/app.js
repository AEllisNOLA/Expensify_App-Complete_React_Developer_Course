import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        <p>ExpenseDashboardPage Component</p>
    </div>
)

const AddExpensePage = () => (
    <div>
        <p>AddExpensePage Component</p>
    </div>
)

const EditExpensePage = () => (
    <div>
        <p>EditExpensePage Component</p>
    </div>
)
const HelpPage = () => (
    <div>
        <p>HelpPage Component</p>
    </div>
)

const NotFoundPage = () => (
    <div>
        <p>404! NotFoundPage Component</p>
    </div>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route path='' component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))