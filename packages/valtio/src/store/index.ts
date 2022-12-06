import { proxy } from "valtio";
export interface Todo {
  id: number;
  text: string;
}
export const state = proxy({
  todos: new Set<Todo>(),
});
export const addTodo = (todo: Todo) => {
  state.todos = new Set(state.todos.add(todo));
};
export const deleteTodo = (todo: Todo) => {
  const oldTodo = new Set(state.todos);
  oldTodo.delete(todo);
  state.todos = oldTodo;
};
