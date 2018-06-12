import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
      const filterTab = this.props.filterTab;
      console.log("filterTab: ", filterTab);
      return (
        <section className="main">
          <ul className="todo-list">
            {/* {this.props.todos.filter(todo => filterTab === "all" ? todo : 
                                      filterTab === "active" ? todo.completed === false: 
                                      filterTab === "completed" ? todo.completed === true: 
                                      todo).map( todo => <TodoItem key={todo.id} todoId={todo.id} text={todo.title} isCompleted={todo.completed} 
                                            onToggle={this.props.onToggle}
                                            onClick={this.props.onClick} 
                                           /> )} */}
            {this.props.todos.filter(todo => filterTab === "all" ? todo : 
                                      filterTab === "active" ? todo.completed === false: 
                                      filterTab === "completed" ? todo.completed === true: 
                                      todo).map( todo => <TodoItem key={todo.id} /> )}
          </ul>
        </section>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {todos: state}
  }
  
  export default connect(mapStateToProps)(TodoList)