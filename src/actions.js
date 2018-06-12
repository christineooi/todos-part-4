import {ADD_TODO, CLEAR_COMPLETED, MARK_COMPLETE, DELETE_TODO} from './action_types'

// Action creators
export const addTodo = (newTodo) => {

    return {
      type: ADD_TODO,
      userId: 1,
      title: newTodo,
      completed: false
    }
  }

export const clearCompletedTodos = () => {
    return {
      type: CLEAR_COMPLETED
    }
  }

export const markComplete = (id) => {
    return {
      type: MARK_COMPLETE,
      id
    }
  }

export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      id
    }
  }