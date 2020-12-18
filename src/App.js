import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notes from './components/Notes'
import NotesProvider from './context/NoteContext'

function App() {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  )
}

export default App
