import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';

class TodoItem extends React.Component {

  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.props.onToggle(this.props.todoId)} checked={this.props.isCompleted}/>
          <label>{this.props.text}</label>
          <button className="destroy" ></button> 
        </div>
      </li>
    );
  }
}

class TodoList extends React.Component {

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map( todo => <TodoItem key={todo.id} todoId={todo.id} text={todo.title} isCompleted={todo.completed} 
                                          onToggle={this.props.onToggle} 
                                         /> )}
        </ul>
      </section>
    );
  }
}

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

  handleOnKeyDown = (event) => {
    if(event.keyCode !== 13)  // Enter Key
      return;
    event.preventDefault();

        var value=this.state.text.trim();
        if(value){
            const userId = this.state.todos[this.state.todos.length-1].userId;
            const id = this.state.todos[this.state.todos.length-1].id;
            this.setState({
              todos: this.state.todos.concat({
                userId:userId,
                id:id + 1,
                title: value,
                completed: false
              }),
              text: ''
            });
            console.log("todos: ", this.state.todos);
        }
  }

  toggleCompleted = id => evt => {
    const { todos } = this.state;
    console.log("In App - todo ID:", id)
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

  render() {
    // const { todos } = this.state;
    //onToggle={(e) => this.toggleTodo(this.state.todos.id, e)}
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
        <TodoList todos={this.state.todos} onToggle={this.toggleCompleted} />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
