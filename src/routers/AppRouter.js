import React from 'react'
import {
  // BrowserRouter,
  Router,
  Route,
  Switch } from 'react-router-dom'
// <browserRouter creates an instance of browser history and register it with
// our router. Otherwise, we can create our own history by importing history
// manually
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'


// première version
// <BrowserRouter>
//  <div> ... </div>
// </BrowserRouter>

// now we use regular router to pass our own history 
// we can export it to use it in other files.
export const history = createHistory()
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/' component={LoginPage} exact={true}/>
        <Route path='/dashboard' component={ExpenseDashboardPage}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage }/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter
