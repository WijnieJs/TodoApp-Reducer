import React, { useReducer, useContext } from 'react'
import Button from '../components/Forms/Button'

import TodosContext from '../context/context'
import todosReducer from '../context/reducer'
import './tableStyle.css'

const initState = { count: 0 }
const Home = () => {
  // const [state, dispatch] = useReducer(reducer, initState)
  // const value = useContext(UserContext)

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return {
  //         count: state.count + 1,
  //       }
  //     case 'decrement':
  //       return {
  //         count: state.count - 1,
  //       }
  //     case 'reset':
  //       return {
  //         count: 0,
  //       }
  //     default:
  //       return initState
  //   }
  // }
  return (
    <div>
      <h4>aaa</h4>
      {/* <Button mode="raised" onClick={() => dispatch({ type: 'increment' })}>
        ADDD
      </Button>
      <Button design="accent" onClick={() => dispatch({ type: 'decrement' })}>
        Minus
      </Button>
      <Button mode="flat" onClick={() => dispatch({ type: 'reset' })}>
        reset
      </Button> */}
      {/* {state.count} */}
    </div>
  )
}

export default Home
