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
import { useApplicationStore } from "./store";

export const TodoList: React.FunctionComponent = () => {
  const lists = useApplicationStore((state) => state.lists);
  const onDeleteTodo = useApplicationStore((state) => state.deleteTodo);
  return (
    <>
      <List disablePadding sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}>
        {Array.from(lists).map((list) => {
          return (
            <div style={{ display: "flex" }}>
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
