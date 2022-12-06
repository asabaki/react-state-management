import { atom } from "jotai";
export interface Todo {
  id: number;
  text: string;
}

export const todoListsState = atom(new Set<Todo>());
export const addTodo = atom(
  null,
  (get, set, todo: Todo) => {
    const lists = new Set(get(todoListsState).add(todo))
    set(todoListsState, lists)
  }
)
export const deleteTodoAtom = atom(
  null,
  (get, set, todo: Todo) => {
    const oldTodos = get(todoListsState)
    oldTodos.delete(todo)
    const lists = new Set(oldTodos)
    set(todoListsState, lists)
  }
)