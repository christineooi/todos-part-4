import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
      return (
        <li className={this.props.isCompleted ? "completed": null}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={this.props.onToggle(this.props.todoId)} checked={this.props.isCompleted}/>
            <label>{this.props.text}</label>
            <button className="destroy" onClick={this.props.onClick(this.props.todoId)}></button> 
          </div>
        </li>
      );
    }
  }

  export default TodoItem;