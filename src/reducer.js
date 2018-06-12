import todoList from './todos.json';
import {ADD_TODO, CLEAR_COMPLETED, MARK_COMPLETE, DELETE_TODO} from './action_types'
// Reducers
const reducer = (state = todoList, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            userId: action.userId,
            id: state[state.length-1].id + 1,
            title: action.title,
            completed: action.completed
          }
        ]
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false)
      case MARK_COMPLETE:
        return state.map(todo =>
            todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
      case DELETE_TODO:
        return state.filter(todo =>
            todo.id !== action.id
        )
      default:
        return state;

    }
  }

  export default reducer