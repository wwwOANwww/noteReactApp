import React from 'react'
import {ListGroup} from 'react-bootstrap'

export default function Allnotes({selectedNote, setSelectedNote, notes, refreshList}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }
  if (!notes.length) return 'No Notes Found'
  return (
    <ListGroup>
      <ListGroup as="ul">
        {notes.map((note, index) => (
          <ListGroup.Item
            key={note.id}
            variant="light"
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => onSelectNote(note)}
            as="li"
          >
            {note.title}

            <div id="note-button" className="noteList">
              <svg
                id="note-button"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sticky-note"
                className="svg-inline--fa fa-sticky-note fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"
                ></path>
              </svg>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </ListGroup>
  )
}
