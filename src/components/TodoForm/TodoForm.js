import React, { useState, useContext, useEffect } from 'react'
import TodosContext from '../../context/context'
import Button from '../Forms/Button'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    } else {
      setTodo('')
    }
  }, [currentTodo.text])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (currentTodo.text) {
      dispatch({ type: 'UPDATE_TODO', payload: todo })
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo })
    }
    setTodo('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={`todoForm`}>
        <input
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          className="border-black border-solid border-2"
          value={todo}
        />
        <Button mode="raised">ADD TODO</Button>
      </form>
    </div>
  )
}

export default TodoForm
