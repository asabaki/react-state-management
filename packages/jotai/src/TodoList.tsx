import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { deleteTodoAtom, todoListsState } from "./store";
import { useAtomValue, useSetAtom } from "jotai";

export const TodoList: React.FunctionComponent = () => {
  const lists = useAtomValue(todoListsState);
  const deleteTodo = useSetAtom(deleteTodoAtom);
  return (
    <>
      <List
        disablePadding
        sx={{ width: "100%", minWidth: 300, bgcolor: "background.paper" }}
      >
        {Array.from(lists).map((list) => {
          return (
            <div style={{ display: "flex" }}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => deleteTodo(list)}
                  >
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
