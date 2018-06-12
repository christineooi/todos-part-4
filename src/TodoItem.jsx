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
    //         <input className="toggle" type="checkbox" onChange={this.toggleCompleted(this.props.todoId)} checked={this.props.isCompleted}/>
    //         <label>{this.props.text}</label>
    //         <button className="destroy" onClick={this.removeTodo(this.props.todoId)}></button> 
    //       </div>
    //     </li>
    //   );
    // }
    render() {
      console.log("In TodoItem - this.props.id: ", this.props.id)
      return (
        <li className={this.props.completed ? "completed": null}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={this.toggleCompleted(this.props.id)} checked={this.props.completed}/>
            <label>{this.props.title}</label>
            <button className="destroy" onClick={this.removeTodo(this.props.id)}></button> 
          </div>
        </li>
      );
    }
  }

  // const mapStateToProps = (state) => {
  //   return {todos: state}
  // }
  


  export default connect()(TodoItem)