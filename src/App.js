import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const initialTodos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: initialTodos
    }
  }

  addTodo = (todoName) => {
  
    this.setState({
      todos: [ ...this.state.todos, {
        task: todoName,
        id: Date.now(),
        completed: false
      }]
    });
  }
  
  deleteTodo = () => {
    const newTodos = this.state.todos.filter(todo => !todo.completed)
    
    this.setState({
      todos: newTodos
    })
  }
  
  toggle = (todoId)=> {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return({
            ...todo,
            completed: !todo.completed
          });
        } else {
          return(todo);
        }
      })
    });
  }

  
  
  render() {
    return (
      <div>
        <TodoList
          deleteTodo={ this.deleteTodo }
          todos={ this.state.todos }
          toggle={ this.toggle } 
          />
        <TodoForm 
          todos={ this.state.todos }
          addTodo={ this.addTodo }
        />
      </div>
    );
  }
}

export default App;
