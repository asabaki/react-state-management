import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoLists } from "./store";
let id = 0
export const TodoInput: React.FunctionComponent = () => {
  const setTodo = useSetRecoilState(todoLists);
  const [newTodoText, setNewTodoText] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodo((lists) => new Set(lists.add({ id: id++, text: newTodoText })));
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
