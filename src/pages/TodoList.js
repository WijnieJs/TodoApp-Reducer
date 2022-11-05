import React, { useContext } from 'react'
import Button from '../components/Forms/Button'
import TodosContext from '../context/context'

export default function TodosList() {
  const { state, dispatch } = useContext(TodosContext)
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing to do'
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="todoItem"
            onDoubleClick={() =>
              dispatch({ type: 'TOGGLE_TODO', payload: todo })
            }
          >
            <div>
              <span className={`todoText ${todo.complete && 'todoComplete'}`}>
                {todo.text}
              </span>
            </div>
            <div className="todoActions">
              <Button
                mode="raised"
                onClick={() =>
                  dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
                }
              >
                Edit
              </Button>
              <Button
                design="danger"
                mode="raised"
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
