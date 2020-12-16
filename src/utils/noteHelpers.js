// const notes = [
//   {id: 1, title: 'to do getNotesgetNotes1', body: 'go to sleep1'},
//   {id: 2, title: 'to do  getNotes getNotes2', body: 'go to sleep2'},
//   {id: 3, title: 'to dogetNotes  3', body: 'go to sleep3'},
// ]
export function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

// this function get all note not from localstorage
// export function getNotes() {
//   return notes
// }

// get all notes from localStorage
export function getNotes() {
  const notes = localStorage.getItem('notes')
  if (!notes) {
    notes = initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

// this function get one note not from localstorage
// export function getNote(id) {
//   return notes.find((note) => note.id === id)
// }

// get one note id from localStorage
export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}

// this function create note not to localstorage
// export function createNote(title, body) {
//   const note = {
//     id: Date.now(),
//     title,
//     body,
//   }
//   // notes.push(note)
//   notes.splice(0, 0, note)
//   return note
// }
export function createNote(title, body) {
  const notes = getNotes()
  const note = {
    id: Date.now(),
    title,
    body,
  }
  // notes.push(note)
  notes.splice(0, 0, note)

  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)

  return note
}

// this function update note not from localstorage
// export function updateNote(id, title, body) {
//   const indexToUpdate = notes.findIndex((note) => note.id === id)
//   const note = {
//     id,
//     title,
//     body,
//   }
//   notes.splice(indexToUpdate, 1, note)
//   //remove old note
//   notes.splice(indexToUpdate, 1)
//   // add the edited note to start
//   notes.splice(0, 0, note)
//   return note
// }

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

// this function delete note not from localstorage
// export function deleteNote(id) {
//   const indexToDelete = notes.findIndex((note) => note.id === id)
//   if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
//   return true
// }

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
  return true
}
