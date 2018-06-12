import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import './App.css';
import TodoList from './TodoList';
import {addTodo, clearCompletedTodos} from './actions';

class App extends Component {


  state = {
    text: '',
    //todos: todoList
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
          this.props.dispatch(addTodo());
          this.setState({
            text: ''
          });
        }
  }

  // // When a particular todo item is checked (marked as complete)
  // toggleCompleted = id => evt => {
  //   const { todos } = this.state;
  //   this.setState({
  //     // If the todo we are iterating over has an id that matches the id we baked into the
  //     // event handler...
  //     todos: todos.map(todo => todo.id === id ? {
  //       // make a copy of the todo...
  //       ...todo,
  //       // but change completed to be the opposite of what it was originally;
  //       completed: !todo.completed
  //       // otherwise, return the original todo, untouched
  //     } : todo)
  //   });
  // }

  // // When the X is clicked on a particular todo item
  // removeTodo = idToRemove => evt => {
  //   const { todos } = this.state;
  //   this.setState({
  //     todos: todos.filter((todo) => {
  //             return todo.id !== idToRemove;
  //           })
  //   });
  // }

  // When the Clear Completed button is clicked
  clearCompleted = evt => {
    this.props.dispatch(clearCompletedTodos());
    // const { todos } = this.state;
    // this.setState({
    //   todos: todos.filter((todo) => {
    //     return !todo.completed;
    //   })
    // });
  }

  render() {
    let todos=this.props.todos;
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
          {/* <Route exact path="/todos-part-4/" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="all"/>} />
          <Route path="/todos-part-4/active" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="active"/>} />
          <Route path="/todos-part-4/completed" render={(props) => <TodoList {...props} todos={this.state.todos} onToggle={this.toggleCompleted} onClick={this.removeTodo} filterTab="completed"/>} /> */}
          <Route exact path="/todos-part-4/" render={(props) => <TodoList {...props} todos={this.props.todos} filterTab="all"/>} />
          <Route path="/todos-part-4/active" render={(props) => <TodoList {...props} todos={this.props.todos} filterTab="active"/>} />
          <Route path="/todos-part-4/completed" render={(props) => <TodoList {...props} todos={this.props.todos} filterTab="completed"/>} />
          <Redirect to="/todos-part-4/" />
        </Switch>
        <footer className="footer">
          <span className="todo-count"><strong>{countTodosLeft}</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <Link to="/todos-part-4/">
                All
              </Link>
            </li>
            <li>
              <Link to="/todos-part-4/active">
                Active
              </Link>
            </li>
            <li>
              <Link to="/todos-part-4/completed">
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

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps)(App)
