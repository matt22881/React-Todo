import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  
  const handleComplete = (e) => {
    props.deleteTodo(props.todos)
  }
  
  return (
    <div>
      {
        props.todos.map(todo => (
          <Todo key={ todo.id } todo={ todo } toggle={props.toggle} />
        ))
      }
      <button onClick={ handleComplete }>
        Clear Complete
      </button>

    </div>
  )
}
