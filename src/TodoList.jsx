import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
      const filterTab = this.props.filterTab;
      return (
        <section className="main">
          <ul className="todo-list">
            {this.props.todos.filter(todo => filterTab === "all" ? todo : 
                                      filterTab === "active" ? todo.completed === false: 
                                      filterTab === "completed" ? todo.completed === true: 
                                      todo).map( todo => <TodoItem key={todo.id} todoId={todo.id} text={todo.title} isCompleted={todo.completed} 
                                            onToggle={this.props.onToggle}
                                            onClick={this.props.onClick} 
                                           /> )}
          </ul>
        </section>
      );
    }
  }

  export default TodoList;