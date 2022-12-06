import create from "zustand";
export interface Todo {
  id: number;
  text: string;
}
export interface ApplicationStore {
  lists: Set<Todo>;
  addTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  lists: new Set<Todo>(),
  addTodo: (todo: Todo) => {
    set((state) => ({ lists: new Set(state.lists.add(todo)) }));
  },
  deleteTodo: (todo: Todo) => {
    set((state) => {
      const newState = new Set(state.lists);
      newState.delete(todo);
      return { lists: newState };
    });
  },
}));
