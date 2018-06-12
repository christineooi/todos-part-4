import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import TodoItem from './TodoItem';
import {clearCompletedTodos} from './actions';

class TodoList extends Component {

    // When the Clear Completed button is clicked
    clearCompleted = () => {
      this.props.dispatch(clearCompletedTodos());
    }

    render() {
      const filterTab = this.props.filterTab;
      // console.log("filterTab: ", filterTab);
      console.log("In TodoList - this.props: ", this.props)
      console.log("this.props.match.path: ", this.props.match.path.includes('completed'))

      let todos=this.props.todos;
      let countTodosLeft = 0;
      // Count how many items are not completed
      for(let i=0;i<todos.length;i++){
        if (!todos[i].completed){
          countTodosLeft++;
        }
      }
      return (
        <React.Fragment>
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
                                        todo).map( todo => <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} /> )}
            </ul>
          </section>
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
      </React.Fragment>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {todos: state}
  }
  
  export default connect(mapStateToProps)(TodoList)