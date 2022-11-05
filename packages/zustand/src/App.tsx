// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Box, TextField, Typography } from '@mui/material';
import './App.css'
import { useApplicationStore } from './store'
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
      <Typography variant='h2'>
        Sample TODO App - Zustand
      </Typography>
      <TodoInput />
      <TodoList />
    </Box>
  )
}

export default App
