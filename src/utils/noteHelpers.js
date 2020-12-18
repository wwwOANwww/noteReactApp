export function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

// get all notes from localStorage
export function getNotes() {
  const notes = localStorage.getItem('notes')
  if (!notes) {
    let notes = initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

// get one note id from localStorage
export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}

// function create note to localstorage
export function createNote(title, body) {
  const notes = getNotes()
  const note = {
    id: Date.now(),
    title,
    body,
  }
  // notes.push(note) --- add to the last one
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)

  return note
}

// this function update note to localstorage
export function updateNote(id, title, body) {
  const notes = getNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1)
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return note
}

// this function delete note from localstorage
export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return true
}
