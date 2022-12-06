import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./store"
let id = 0
export const TodoInput: React.FunctionComponent = () => {
  const addTodo = useDispatch()
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("adding todo")
          addTodo({ type: actions.ADD_TODO, payload: { id: id++, text: newTodoText}})
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
