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
import { actions, Todo } from "./store";
import { useDispatch, useSelector } from "react-redux";

export const TodoList: React.FunctionComponent = () => {
  // const [lists, setLists] = useSelector(todoLists);
  const lists = useSelector((state: any) => state)
  console.log(lists);
  const dispatch = useDispatch();
  return (
    <>
      <List disablePadding sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}>
        {Array.from(lists.lists).map((list: any) => {
          return (
            <div style={{ display: "flex" }} key={list.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={() => dispatch({ type: actions.DELETE_TODO, payload: list })}>
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
