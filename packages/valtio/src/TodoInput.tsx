import TextField from "@mui/material/TextField";
import { useState } from "react";
import { addTodo } from "./store";
import { useSnapshot } from "valtio"
export const TodoInput: React.FunctionComponent = () => {
  // const todoLists = useSnapshot(todoListsState);
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ id: 1, text: newTodoText })
          // todoLists.add({ id: 1, text: newTodoText})
          // setTodo({ id: 1, text: newTodoText });
        }}
      >
        <TextField
          id="newTodo"
          variant="filled"
          label="DO SOMETHING!"
          sx={{ mt: 10, flex: 1, width: 500 }}
          color="primary"
          onChange={(e) => setNewTodoText(e.target.value)}
          value={newTodoText}
        />
      </form>
    </>
  );
};
