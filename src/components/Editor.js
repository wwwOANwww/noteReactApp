import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as N from '../utils/NoteHelpers'

export default function Editor({selectedNote, refreshList}) {
  // console.log(selectedNote)

  const [title, setTitle] = useState('')
  useEffect(() => {
    if (selectedNote) setTitle(selectedNote.title)
  }, [selectedNote])

  const onInputTitle = (e) => setTitle(e.target.value)
  const [body, setBody] = useState('')
  const onInputBody = (e) => setBody(e.target.value)
  // console.log('title :', title, 'Body : ', body)

  useEffect(() => {
    if (selectedNote) setBody(selectedNote.body)
  }, [selectedNote])

  const onSave = (e) => {
    e.preventDefault()
    if (selectedNote) {
      N.updateNote(selectedNote.id, title, body)
      console.log(N.getNotes())
      return refreshList()
    }
    N.createNote(title, body)
    refreshList()
    console.log(N.getNotes())
  }
  // console.log('save new note with title', title)

  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          {/* <Form.Label>Title</Form.Label> */}
          {/* <Form.Control type="title" placeholder="Title" onChange={onInputTitle} /> */}
          <Form.Control
            // type="title"
            placeholder="Title"
            // value={selectedNote ? selectedNote.title : title}
            //value={() => title}
            value={title}
            onChange={onInputTitle}
          />
        </Form.Group>

        <Form.Group controlId="yournote">
          {/* <Form.Control as="textarea" rows={3} placeholder="Your note" onChange={onInputBody} /> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your note"
            //value={selectedNote ? selectedNote.body : body}
            value={body}
            onChange={onInputBody}
          />
        </Form.Group>
      </Form>
      <Button
        variant="info"
        size="sm"
        className="saveBtn"
        //onClick={selectedNote ? selectedNote.title : ''}
        onClick={onSave}
      >
        Save
      </Button>{' '}
    </div>
  )
}
