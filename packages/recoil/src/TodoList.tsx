import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Todo, todoLists } from "./store";
import { useRecoilState } from "recoil";

export const TodoList: React.FunctionComponent = () => {
  const [lists, setLists] = useRecoilState(todoLists);
  const onDeleteTodo = (todo: Todo) => {
    setLists(todos => {
      todos.delete(todo)
      return new Set(todos)
    })
  }
  return (
    <>
      <List disablePadding sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}>
        {Array.from(lists).map((list) => {
          return (
            <div style={{ display: "flex" }} key={list.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={() => onDeleteTodo(list)}>
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} onClick={() => {}} dense>
                  <Checkbox />
                  <ListItemText id={String(list.id)} primary={list.text} />
                </ListItemButton>
              </ListItem>
            </div>
          );
        })}
      </List>
    </>
  );
};
