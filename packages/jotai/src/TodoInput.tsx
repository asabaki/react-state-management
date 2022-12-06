import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { addTodo } from "./store";

export const TodoInput: React.FunctionComponent = () => {
  const setTodo = useSetAtom(addTodo);
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodo({ id: 1, text: newTodoText });
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
