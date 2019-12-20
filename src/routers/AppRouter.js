import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import Error404 from '../components/Error404'
import LoginPage from '../components/LoginPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/add' component={AddExpense} />
                <Route path='/edit/:id' component={EditExpense} />
                <Route path='/help' component={Help} />

                <Route component={Error404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;