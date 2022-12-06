import { Box, Typography } from "@mui/material";
import "./App.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">Sample TODO App - Valtio</Typography>
      <TodoInput />
      <TodoList />
    </Box>
  );
}

export default App;
