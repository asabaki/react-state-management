import { atom } from "recoil";
export interface Todo {
  id: number;
  text: string;
}
export const todoLists = atom({
  key: 'todoList',
  default: new Set<Todo>()
});
