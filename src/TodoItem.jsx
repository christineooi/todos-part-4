import React, { Component } from 'react';
import { connect } from 'react-redux'
import { markComplete, deleteTodo } from './actions';

class TodoItem extends Component {

   // When a particular todo item is checked (marked as complete)
   toggleCompleted = id => evt => {
    // const { todos } = this.state;
    this.props.dispatch(markComplete(id));
  }

  // When the X is clicked on a particular todo item
  removeTodo = idToRemove => evt => {
    this.props.dispatch(deleteTodo(idToRemove));
  }

    // render() {
    //   return (
    //     <li className={this.props.isCompleted ? "completed": null}>
    //       <div className="view">
    //         <input className="toggle" type="checkbox" onChange={this.props.onToggle(this.props.todoId)} checked={this.props.isCompleted}/>
    //         <label>{this.props.text}</label>
    //         <button className="destroy" onClick={this.props.onClick(this.props.todoId)}></button> 
    //       </div>
    //     </li>
    //   );
    // }
    render() {
      return (
        <li className={this.props.todos.completed ? "completed": null}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={this.toggleCompleted(this.props.todos.id)} checked={this.props.todos.completed}/>
            <label>{this.props.todos.title}</label>
            <button className="destroy" onClick={this.removeTodo(this.props.todos.id)}></button> 
          </div>
        </li>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {todos: state}
  }
  


  export default connect(mapStateToProps)(TodoItem)