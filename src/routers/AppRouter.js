import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import Error404 from '../components/Error404'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/add' component={AddExpense} />
                <PrivateRoute path='/edit/:id' component={EditExpense} />


                <Route component={Error404} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;