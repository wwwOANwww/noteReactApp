import React from 'react'
import {getNotes} from '../utils/NoteHelpers'
import {ListGroup} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

let selectedNote = undefined
export default function Allnotes({selectedNote, setSelectedNote}) {
  // or i can write like this 2 lines
  // export default function Allnotes(props) {
  // const {selectedNote, setSelectedNote} = props

  // const [selectedNote, setSelectedNote] = useState(undefined)

  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  //const onSelectNote = (note) => {
  //   console.log(note)
  // }

  return (
    <>
      <ListGroup as="ul">
        {getNotes().map((note, index) => (
          <ListGroup.Item
            variant="light"
            // action href="#"
            //active={index === 0}
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => onSelectNote(note)}
            // onClick={() => console.log(note)}
            as="li"
          >
            {note.title}
            <button id="delete-button" className="noteList">
              <svg
                id="delete-button"
                class="delete-icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="trash-alt"
                class="svg-inline--fa fa-trash-alt fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
                ></path>
              </svg>
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}