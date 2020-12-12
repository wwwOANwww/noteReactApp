// export const notes = [
//   {id: '01', title: 'go to sleep', body: 'you need to sleep more than 7 hrs per day'},
//   {id: '02', title: 'go to sleep2', body: 'you need to sleep more than 7 hrs per day'},
//   {id: '03', title: 'go to sleep3', body: 'you need to sleep more than 7 hrs per day'},
//   {id: '04', title: 'go to sleep4', body: 'you need to sleep more than 7 hrs per day'},
// ]
const notes = [
  {id: 1, title: 'to do getNotesgetNotes1', body: 'go to sleep1'},
  {id: 2, title: 'to do  getNotes getNotes2', body: 'go to sleep2'},
  {id: 3, title: 'to dogetNotes  3', body: 'go to sleep3'},
]

export function getNote(id) {
  return notes.find((note) => note.id === id)
}
export function getNotes() {
  return notes
}

export function createNote(title, body) {
  const note = {
    id: notes.length + 1,
    title: title,
    body: body,
  }
  notes.push(note)
  return note
}
export function updateNote(id, title, body) {
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1, note)
  return note
}
export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  notes.splice(indexToDelete, 1)
  return true
}
