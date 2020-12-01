import React, { useState } from 'react'

export default function TodoForm(props) {
  const [formValues, setFormValues] = useState('')
  
  const handleChanges = e => {
    setFormValues(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target[0].value)
    props.addTodo(e.target[ 0 ].value)
    setFormValues('')
  }

    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='todo'>
            Want to add a New To-Do?  
            <input
              type='text'
              name='todo'
              value={formValues}
              onChange={handleChanges}
              placeholder='New To-Do'

            />
            <button type='submit'>
              Add To-Do
            </button>
          </label>
        </form>
      </div>
    )
  }

