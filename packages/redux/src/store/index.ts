import { createStore } from 'redux'

export interface Todo {
  id: number;
  text: string;
}
export interface Action {
  type: string,
  payload: any;
}
const initialState = {
  lists: new Set<Todo>(),
}
export const actions = {
  ADD_TODO: "todo/add",
  DELETE_TODO: "todo/delete"
}
function counterReducer(state = initialState, action: Action) {
  switch (action.type) {

    case actions.ADD_TODO: {
      const lists = state.lists;
      lists.add(action.payload);
      return { lists }
    }
    case actions.DELETE_TODO: {
      const lists = state.lists
      lists.delete(action.payload)
      return { lists }
    }
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default store