import React, { useState, useReducer, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import TodosContext from './context/context'
import todosReducer from './context/reducer'
import Layout from './components/Layout/Layout'
import ToolBar from './components/Navigation/ToolBar/ToolBar'
import MobileNav from './components/Navigation/MobileNav/MobileNav'
import MainNav from './components/Navigation/MainNav/MainNav'
import BackDrop from './components/UI-interfaces/Backdrop'
import Home from './pages/Home'
import PageOne from './pages/PageOne'
import TodosList from './pages/TodoList'

import TodoForm from './components/TodoForm/TodoForm'
import './App.css'

function App() {
  const [navState, setNavState] = useState({
    showBackdrop: false,
    showMobileNav: false,
    error: false,
  })
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const [auth] = useState(true)

  const mobileNavHandler = (isOpen) => {
    setNavState({ showMobileNav: isOpen, showBackdrop: isOpen })
  }

  const backdropClickHandler = () => {
    setNavState({ showBackdrop: false, showMobileNav: false, error: null })
  }

  const logoutHandler = () => {
    // setAuth(false)
    console.log('Logout')
    // localStorage.removeItem('token')
    // localStorage.removeItem('expiryDate')
    // localStorage.removeItem('userId')
  }

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <React.Fragment>
          {navState.showBackdrop && <BackDrop onClick={backdropClickHandler} />}

          <Layout
            header={
              <ToolBar>
                <MainNav
                  onOpenMobileNav={() => mobileNavHandler(true)}
                  onLogout={logoutHandler}
                  isAuth={auth}
                />
              </ToolBar>
            }
            mobileNav={
              <MobileNav
                open={navState.showMobileNav}
                mobile
                onChooseItem={() => mobileNavHandler(false)}
                onLogout={() => mobileNavHandler(false)}
                isAuth={auth}
              />
            }
          />
          <TodoForm />

          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route
              path="/one"
              exact
              render={(props) => <PageOne {...props} />}
            />

            <Route
              path="/todolist"
              exact
              render={(props) => <TodosList {...props} />}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </TodosContext.Provider>
  )
}

export default App
