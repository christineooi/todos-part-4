import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import todoList from './todos.json';
import TodoList from './TodoList';


class App extends Component {

  state = {
    text: '',
    todos: todoList
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  // Entering a new todo item
  handleOnKeyDown = (event) => {
    if(event.keyCode !== 13)  // Enter Key
      return;
    event.preventDefault();

        var value=this.state.text.trim();
        if(value){
            const userId = this.state.todos.length ? this.state.todos[this.state.todos.length-1].userId : 1;
            const id = this.state.todos.length ? this.state.todos[this.state.todos.length-1].id : 1;
            this.setState({
              todos: this.state.todos.concat({
                userId:userId,
                id:id + 1,
                title: value,
                completed: false
              }),
              text: ''
            });
        }
  }

  // When a particular todo item is checked (marked as complete)
  toggleCompleted = id => evt => {
    const { todos } = this.state;
    this.setState({
      // If the todo we are iterating over has an id that matches the id we baked into the
      // event handler...
      todos: todos.map(todo => todo.id === id ? {
        // make a copy of the todo...
        ...todo,
        // but change completed to be the opposite of what it was originally;
        completed: !todo.completed
        // otherwise, return the original todo, untouched
      } : todo)
    });
  }

  // When the X is clicked on a particular todo item
  removeTodo = idToRemove => evt => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
              return todo.id !== idToRemove;
            })
    });
  }

  // When the Clear Completed button is clicked
  clearCompleted = evt => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => {
        return !todo.completed;
      })
    });
  }

  render() {
    let todos=this.state.todos;
    let countTodosLeft = 0;
    // Count how many items are not completed
    for(let i=0;i<todos.length;i++){
      if (!todos[i].completed){
        countTodosLeft++;
      }
    }

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <input className="new-todo" type="text" 
            value={this.state.text} 
            onChange={this.handleOnChange} 
            onKeyDown={this.handleOnKeyDown} 
            placeholder="What needs to be done?" autoFocus 
          />
        </header>
        <Switch>
          <Route exact path="/" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="all"/>} />
          <Route path="/active" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="active"/>} />
          <Route path="/completed" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="completed"/>} />
        </Switch>
        <footer className="footer">
          <span className="todo-count"><strong>{countTodosLeft}</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <Link to="/">
                All
              </Link>
            </li>
            <li>
              <Link to="/active">
                Active
              </Link>
            </li>
            <li>
              <Link to="/completed">
                Completed
              </Link>
            </li>
          </ul>
          
          <button className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
